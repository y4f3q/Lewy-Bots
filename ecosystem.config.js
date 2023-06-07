let _sys = require('./Global/Settings/_system.json');
let botcuk = [
  {
    name: "Mainframe",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Voucher"
  },
  {
    name: "Controller",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Controller"
  },
  {
    name: "Statistics",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Statistics"
  },
  {
    name: "Sync",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Sync"
  },
  {
    name: "Security_I",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Guard_I"
  },
  {
    name: "Security_II",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Guard_II"
  },
  {
    name: "API",
    namespace: "Web Synl.io",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Web"
  },
  {
    name: "Distributors",
    namespace: "LewyCode",
    script: 'main.acar',
    watch: false,
    exec_mode: "cluster",
    max_memory_restart: "2G",
    cwd: "./Server/Distributors"
  },
]
if(_sys.TOKENS.WELCOME.Active) {
  botcuk.push(
    {
      name: "Voices",
      namespace: "LewyCode",
      script: 'Start.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "../WELCOMES"
    }
  )
}
module.exports = {
  apps: botcuk
};