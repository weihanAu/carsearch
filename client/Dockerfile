# 使用Node.js官方镜像作为构建基础
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json /app

# 安装依赖
RUN npm install

# 复制所有文件
COPY . /app

# 启动React开发服务器
CMD ["npm", "start","--no-eslint"]
