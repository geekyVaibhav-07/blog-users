const User = require('./../model/userModel');
const errorCatcher = require('./../helper/errorCatcher');
const Response = require('./../helper/response');
const constants = require('../constants/constants');
const QueryBuilder = require('./../helper/queryBuilder');
const { filterUndefined } = require('./../helper/objectHelpers');

const createUser = async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        gender,
        bio,
        profession,
        address,
        contactNumber,
        dob,
        confirmPassword,
    } = req.body || {};

    const newUser = new User({
        email,
        password,
        firstName,
        lastName,
        gender,
        bio,
        profession,
        address,
        contactNumber,
        dob,
        confirmPassword
    });

    const response = await newUser.save();
    res.status(200).json(
        new Response({
            message: constants.USER_CREATED,
            devResponse: response
        })
    )
};

const getUsers = async (req, res) => {
    const queryBuilder = new QueryBuilder(User.find(), { ...req.query });
    const response = await queryBuilder.filter().query;
    res.status(200).json(
        new Response({
            message: constants.USER_RETRIEVED,
            data: response
        })
    )
}

const getUserById = async (_id) => {
    const queryBuilder = new QueryBuilder(User.find({ _id })).query;
    return await queryBuilder;
    
}

const getMe = async (req, res) => {
    const { _id } = req.user || {};
    const response = await getUserById(_id);
    res.status(200).json(
        new Response({
            message: constants.USER_RETRIEVED,
            data: response
        })
    )
}

const deleteUser = async (req, res) => {
    const { _id } = req.user || {};
    await User.deleteOne({ _id });
    res.status(200).json(
        new Response({
            message: constants.USER_DELETED,
        })
    )
}

const updatedUser = async (req, res) => {
    const { _id } = req.user || {};
    const {
        firstName,
        lastName,
        gender,
        bio,
        profession,
        address,
        contactNumber,
        dob,
    } = req.body || {};
    const dataToUpdate = filterUndefined({
        firstName,
        lastName,
        gender,
        bio,
        profession,
        address,
        contactNumber,
        dob,
    });
    console.log(dataToUpdate);
    const opts = { runValidators: true };
    const response = await User.updateOne({ _id }, dataToUpdate, opts);
    res.status(201).json(
        new Response({
            message: constants.UPDATED,
            data: response
        })
    )

}

module.exports = {
    createUser: errorCatcher(createUser),
    getUsers: errorCatcher(getUsers),
    deleteUser: errorCatcher(deleteUser),
    updatedUser: errorCatcher(updatedUser),
    getUserById: errorCatcher(getUserById),
    getMe: errorCatcher(getMe)
}