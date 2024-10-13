module.exports = {
    apps: [
      {
        name: 'bits-landing',
        script: 'next',
        args: 'start',
        exec_mode: 'cluster',
        instances: 'max'
      }
    ]
  }