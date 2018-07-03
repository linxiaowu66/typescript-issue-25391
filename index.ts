import 'reflect-metadata'

const JAVATYPE_SYMBOL = Symbol("javatype")

function javaType(type: JavaType): ParameterDecorator {
  return (
    target: object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    if (Reflect.hasOwnMetadata(JAVATYPE_SYMBOL, target, propertyKey)) {
      const metadata = Reflect.getOwnMetadata(
        JAVATYPE_SYMBOL,
        target,
        propertyKey
      )
      metadata[parameterIndex] = type
    } else {
      const metadata = []
      metadata[parameterIndex] = type
      Reflect.defineMetadata(JAVATYPE_SYMBOL, metadata, target, propertyKey)
    }
  }
}

class UserProvider {
    async update(@javaType({ "name": "com.alibaba.redcliff.user.entity", "isPrimitive": false, "isArray": false, "isGeneric": false }) user: com.alibaba.redcliff.user.entity): Promise<number> {
        return this._ref.invoke('update', Array.from(arguments))
    }
}
