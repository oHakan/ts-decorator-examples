export function reverseDecorator(): any {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (typeof descriptor.value === 'function') {
            const declaredFn = descriptor.value

            descriptor.value = () => {
                const result = declaredFn.apply(target)
                const resultToArr = result.split('');
                const reversedArr = resultToArr.reverse();

                return reversedArr.join('');
            }
        }
    }
}

class exampleClass {
    static willReverseName: string = 'EXAMPLE';

    @reverseDecorator()
    public static reverse(): string {
        return exampleClass.willReverseName;
    }
}

console.log(exampleClass.reverse()) // EXPECTED OUTPUT: ELPMAXE