module.exports = {
    apps: [
      {
        name: 'bits-landing',
        script: 'npm',
        args: 'start -p 4000',
        exec_mode: 'cluster',
        instances: 'max'
      }
    ]
  }