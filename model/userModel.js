const mongoose = require('mongoose');
const schemaValidator = require('../helper/userSchemaValidator');
const constants = require('./../constants/constants');
const documentMiddleware = require('../helper/userDocumentMiddleware');
const userSchemaMethods = require('../helper/userSchemaMethod');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: schemaValidator.validEmail,
            message: constants.EMAIL_INVALID
        },
        required: [ true, constants.EMAIL_REQUIRED ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, constants.PASSWORD_REQUIRED ],
        validate: {
            validator: schemaValidator.validatePasswordComplexity,
            message: constants.PASSWORD_COMPLEXITY
        },
        select: false
    },
    confirmPassword: {
        type: String,
        required: [ true, constants.CONFIRM_PASSWORD_REQUIRED ],
        validate: {
            validator: schemaValidator.validateConfirmPassword,
            message: constants.PASSWORD_MISMATCH
        },
    },
    passwordChangedAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    firstName: {
        type: String,
        required: [ true, constants.FIRST_NAME_REQUIRED ]
    },
    lastName: {
        type: String,
        required: [ true, constants.LAST_NAME_REQUIRED ]
    },
    gender: {
        type: String,
        validate: {
            validator: schemaValidator.validGender,
            message: constants.GENDER_INVALID
        },
        required: [ true, constants.GENDER_REQUIRED ]
    },
    bio: String,
    profession: String,
    address: String,
    contactNumber: {
        type: String,
        validate: {
            validator: schemaValidator.validContactNumber,
            message: constants.CONTACT_NUMBER_INVALID
        },
        required: [ true, constants.CONTACT_NUMBER_REQUIRED ]
    },
    dob: {
        type: String,
        validate: {
            validator: schemaValidator.validDOB,
            message: constants.DOB_INVALID
        },
        required: [ true, constants.DOB_REQUIRED ]
    },
    profilePicture: String,
    pictures: Array,
    accountCreatedAt: {
        type: Date,
        default: Date.now()
    },
    wrongPasswordAttempts: {
        type: Number,
        select: false,
        default: 0,
    },
    isBlocked: {
        type: Date,
        default: null,
        select: false
    }
});

/**
 * validattor functions for updates
 */
userSchema.path('email').validate(schemaValidator.validEmail, constants.EMAIL_INVALID);
userSchema.path('password').validate(schemaValidator.validatePasswordComplexity, constants.PASSWORD_COMPLEXITY);
userSchema.path('gender').validate(schemaValidator.validGender, constants.GENDER_INVALID);
userSchema.path('contactNumber').validate(schemaValidator.validContactNumber, constants.CONTACT_NUMBER_INVALID);
userSchema.path('dob').validate(schemaValidator.validDOB, constants.DOB_INVALID);

userSchema.pre('save', documentMiddleware.encryptPassword);
userSchema.post('save', documentMiddleware.removePasswordFromDoc);
userSchema.methods = {
    ...userSchema,
    ...userSchemaMethods
}

const User = mongoose.model('User', userSchema, 'users');




module.exports = User;