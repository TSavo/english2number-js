module.exports = function () {
    return {
        files: [
            "*.js"
        ],

        tests: [
            "test/**/*Spec.js"
        ],
        env: {
            type: "node"
        }
    };
};