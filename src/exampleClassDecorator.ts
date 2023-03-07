type ClassConstructor<T> = new (...args: any[]) => T;

function classDecorator<T extends ClassConstructor<{}>>(constructor: T) {
    return class extends constructor {
        getHere(): void {
            console.log('Hello');
        }
    }
}

class ExampleClass{
    public outHere(): void {
        console.log('Out here.')
    }
}

const compiledClass = classDecorator(ExampleClass);
const newClass = new compiledClass();

newClass.getHere(); // EXPECTED OUTPUT: Hello
newClass.outHere(); // EXPECTED OUTPUT: Out here.