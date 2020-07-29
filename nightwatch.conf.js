module.exports = {
  test_settings: {
    default: {
      selenium_port: 4003,
      selenium_host: '127.0.0.1',
      // webdriver: {
      //   start_process: true,
      //   server_path: chromedriver.path,
      //   port: 4444,
      //   cli_args: ['--port=4444'],
      // },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          args: [
            '--user-agent=Mozilla/5.0 (Linux; Android 9; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Mobile Safari/537.36',
            '--enable-automation',
            '--window-size=360,640',
            // '--headless',
            '--no-sandbox',
            '--disable-webgl=true',
            '--disable-3d-apis=true',
          ],
        },
        enableVNC: true,
        acceptSslCerts: true,
        screenResolution: '768x640x24',
      },
    },
  },
};