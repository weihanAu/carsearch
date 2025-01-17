# 使用Node.js官方镜像作为基础
FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./app

# 安装依赖
RUN npm install

# 复制所有文件
COPY . /app

# 设置环境变量
ENV PORT=5000

# 启动Node.js应用
CMD ["npm", "run", "dev"]
