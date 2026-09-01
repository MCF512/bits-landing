module.exports = {
    apps: [
      {
        name: 'bits-landing',
        script: 'npm',
        args: 'start',
        exec_mode: 'cluster',
        instances: 'max'
      }
    ]
  }