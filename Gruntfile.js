module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: false
                },
                files: [ {
                    cwd: "src/jade",
                    src: "**/*.jade",
                    dest: "html",
                    expand: true,
                    ext: ".html"
                } ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jade");
};
