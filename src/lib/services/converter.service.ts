import { VTCMConfiguration } from "../types/modules/vtcmconfiguration";

export class ConverterService {
  public static globalFields() {
    return [
      'fld_scanparameters',
      'fld_mimetoextensionsmap',
      'fld_mimetypemappings',
      'fld_activecontentconfiguration',
    ];
  }

  public static realmField() {
    return 'cf_vtcmconfigurations_realmdifference';
  }

  public static sidField() {
    return 'cf_vtcmconfigurations_siddifference';
  }

  public static localFields() {
    return [ConverterService.realmField(), ConverterService.sidField()];
  }

  public static fields() {
    return [
      ...ConverterService.globalFields(),
      ...ConverterService.localFields(),
    ];
  }

  public static decode(data = {}) {
    const result = {};
    for (const property in data) {
      // @ts-ignore
      result[property] = {};
      // @ts-ignore
      data[property].forEach(([p1, p2]) => {
        // @ts-ignore
        result[property][p1] = p2;
      });
    }
    return result;
  }

  public static encode(data = {}) {
    const result = {};
    for (const property in data) {
      // @ts-ignore
      result[property] = Object.keys(data[property]).map((key) => {
        // @ts-ignore
        return [key, data[property][key]];
      });
    }
    return result;
  }

  public static map(height: { [x: string]: { [x: string]: any } }, low = {}) {
    const result = {};
    Object.keys(height).forEach((property) => {
      // @ts-ignore
      result[property] = {};

      if (!low.hasOwnProperty(property)) {
        // @ts-ignore
        result[property] = height[property];
        return;
      }

      // @ts-ignore
      const newLowProps = low[property].filter(
        (value: { status: StatusEnum }) => value?.status === StatusEnum.new,
      );

      newLowProps.forEach((newLowProp: { key: string; value: any }) => {
        // @ts-ignore
        result[property][newLowProp?.key] = newLowProp?.value;
      });

      Object.keys(height[property]).forEach((key) => {
        // @ts-ignore
        result[property][key] = height[property][key];

        // @ts-ignore
        if (!low[property]?.length) return;

        // @ts-ignore
        const lowPropObj = low[property].find(
          (value: { [x: string]: any }) => value?.key === key,
        );

        if (!lowPropObj) return;

        const { status } = lowPropObj;

        switch (status) {
          case StatusEnum.updated:
            // @ts-ignore
            result[property][key] = lowPropObj?.value;
            return;
          case StatusEnum.deleted:
            // @ts-ignore
            delete result[property][key];
            return;
        }
      });
    });
    return result;
  }

  public static decodeBase64(base64: string) {
    try {
      const stringBuffer = Buffer.from(base64, 'base64').toString('utf-8');
      return !!stringBuffer ? JSON.parse(stringBuffer) : {};
    } catch (error) {
      console.error('Error decoding base64:', error);
      return {};
    }
  }

  public static encodeBase64(obj = {}) {
    try {
      const jsonString = JSON.stringify(obj);
      const buffer = Buffer.from(jsonString, 'utf-8');
      return buffer.toString('base64');
    } catch (error) {
      console.error('Error encoding object to base64:', error);
      return null;
    }
  }

  public static configDecodeBase64(
    configuration: VTCMConfiguration | ConfigType,
  ) {
    const result = {};
    ConverterService.fields().forEach((field) => {
      if (configuration.hasOwnProperty(field)) {
        // @ts-ignore
        result[field] = ConverterService.decodeBase64(configuration[field]);
      }
    });
    return result;
  }

  public static mergeConfigurations(
    hightConfig: VTCMConfiguration | ConfigType,
    lowConfig: VTCMConfiguration | ConfigType,
    type: MappingTypeEnum,
  ) {
    const decodedBase64Hight = ConverterService.configDecodeBase64(hightConfig);
    const decodedBase64Low = ConverterService.configDecodeBase64(lowConfig);

    const diffConf =
      type === MappingTypeEnum.realm
        // @ts-ignore
        ? decodedBase64Low[ConverterService.realmField()]
        // @ts-ignore
        : decodedBase64Low[ConverterService.sidField()];
    ConverterService.globalFields().forEach((globalField) => {
      if (decodedBase64Hight.hasOwnProperty(globalField)) {
        const contentDecode = ConverterService.decode(
          // @ts-ignore
          decodedBase64Hight[globalField],
        );
        const mappedResult = ConverterService.map(contentDecode, diffConf);
        const encodedMappedResult = ConverterService.encode(mappedResult);
        // @ts-ignore
        hightConfig[globalField] =
          ConverterService.encodeBase64(encodedMappedResult);
      }
    });
    return hightConfig;
  }
}

export enum MappingTypeEnum {
  realm,
  sid,
}

type ConfigType = {
  fld_scanparameters: string;
  fld_mimetoextensionsmap: string;
  fld_mimetypemappings: string;
  fld_activecontentconfiguration: string;
  cf_vtcmconfigurations_realmdifference: string;
  cf_vtcmconfigurations_siddifference: string;
};

enum StatusEnum {
  updated = 'updated',
  new = 'new',
  deleted = 'deleted',
}
