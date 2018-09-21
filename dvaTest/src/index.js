import dva from 'dva';
import './index.css';

// 1. Initialize 创建dva实例
const app = dva();

// 2. Plugins 装载插件
// app.use({});

// 3. Model 注册model
 app.model(require('./models/example').default);

// 4. Router 配置路由
app.router(require('./router').default);

// 5. Start 启动应用
app.start('#root');
