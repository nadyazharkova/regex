import Validator from '../index';

test('validator test', () => {
    const str = new Validator('a32_-b');
    const result = str.validateUserName();
    expect(result).toBe(true);
});

test('validator test false', () => {
    const str = new Validator('1a32_-b');
    const result = str.validateUserName();
    expect(result).toBe(false);
});

test('validatorName', () => {
    const validate = new Validator('den');
    const { name } = validate;
    expect(name).toBe('den');
});