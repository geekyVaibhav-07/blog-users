/**
 * Schema valdiation only works when 'save' and 'create' events are fired
 */
class SchemaValidator {

    validEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validGender(gender) {
        return [ 'M', 'F', 'O' ].find(g => g === gender);
    }

    validContactNumber(number) {
        return number.length < 20;
    }

    validDOB(dob) {
        // logic will be implemented later
        return dob;
    }

    validateConfirmPassword(confirmPassword) {
        return this.password === confirmPassword
    }

    validatePasswordComplexity(password) {
        const testArray = [ /\d/, /[a-z]/, /[A-Z]/, /!|@|#|\$|%|\^|\&|\*|\?/, /^.{8,15}/ ];
        for(let i = 0; i< testArray.length; i++) {
            if (!testArray[i].test(password)) {
                return false;
            }
        }
        return true;
    }
}

const schemaValidator = new SchemaValidator();

module.exports = schemaValidator;