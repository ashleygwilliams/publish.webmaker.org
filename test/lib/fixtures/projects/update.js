var retrieveTestProjects = require('./test-projects');

var validProjects;
var invalidProject;

var update = {};

module.exports = function(cb) {
  if (update.success) {
    return cb(null, update);
  }

  retrieveTestProjects(function(err, projects) {
    if (err) return cb(err);

    validProjects = projects.valid;
    invalidProject = projects.invalid;

    update.success = {
      default: {
        url: '/projects/' + validProjects[0].id,
        method: 'put',
        payload: {
          title: validProjects[0].title,
          user_id: validProjects[0].user_id,
          date_created: validProjects[0].date_created,
          date_updated: '01/01/15',
          description: validProjects[0].description,
          tags: validProjects[0].tags
        }
      }
    };

    update.fail = {
      projectDoesNotExist: {
        url: '/projects/999999',
        method: 'put',
        payload: {
          title: validProjects[0].title,
          user_id: validProjects[0].user_id,
          date_created: validProjects[0].date_created,
          date_updated: '01/01/15',
          description: validProjects[0].description,
          tags: validProjects[0].tags
        }
      },
      projectidTypeError: {
        url: '/projects/thisisastring',
        method: 'put',
        payload: {
          title: validProjects[0].title,
          user_id: validProjects[0].user_id,
          date_created: validProjects[0].date_created,
          date_updated: '01/01/15',
          description: validProjects[0].description,
          tags: validProjects[0].tags
        }
      }
    };

    cb(null, update);
  });
}
