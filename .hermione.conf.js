module.exports = {
  sets: {
    desktop: {
      files: 'tests/common'
    }
  },

  //baseUrl: 'https://s2b.standardchartered.com',
  //gridUrl: 'http://localhost:4444/wd/hub',
  compositeImage: true,

  browsers: {
    chromeXL: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless'],
        },
      },
      windowSize: '1300x900',
    },
    chromeMobile: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--headless'],
        },
      },
      windowSize: {
        width: 414,
        height: 800
      },
    },

    // firefoxXL: {
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //   },
    //   windowSize:'1300x900'
    // },

    
    // safariXL: {
    //   desiredCapabilities: {
    //     browserName: 'safari',
    //   },
    //   windowSize: '1300x900'
    // },
    // safariMobile: {
    //   desiredCapabilities: {
    //     browserName: 'safari',
    //   },
    //   windowSize: {
    //     width: 414,
    //     height: 700
    //   }
    // } 
    
    
  },

  plugins: {
    'html-reporter/hermione': {
      enabled: true,
      path: 'my/hermione-reports',
      defaultView: 'all'
      //baseHost: 'https://s2b.standardchartered.com'
    }
  }
};
