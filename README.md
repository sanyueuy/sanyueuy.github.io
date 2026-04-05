# Academic Homepage

这是一个可直接部署到 GitHub Pages 的静态学术主页，支持项目展示、图片画廊和外链视频。

## 文件说明

- `index.html`: 页面结构
- `styles.css`: 视觉样式与响应式布局
- `site-data.js`: 个人信息、项目、图片、视频、论文、新闻、经历等内容数据
- `script.js`: 页面渲染逻辑

## 你最常需要改的地方

主要编辑 `site-data.js`：

- `profile.name`: 姓名
- `profile.affiliation`: 单位
- `profile.subtitle`: 一句话研究简介
- `profile.about`: 个人简介
- `profile.quickLinks`: Scholar、CV、GitHub 等
- `research`: 研究方向
- `news`: 近期动态
- `projects`: 项目展示，内部可配置图片和视频
- `publications`: 论文列表
- `experience`: 教育与工作经历
- `service`: 教学与学术服务
- `profile.contact`: 联系方式

## 本地预览

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## GitHub Pages

将这些文件推送到 `sanyueuy.github.io` 仓库的默认分支后，GitHub Pages 会自动发布。

## 腾讯云 COS 视频

在 `site-data.js` 的 `projects[].media` 中添加：

```js
{
  type: 'video',
  src: 'https://your-bucket.cos.ap-shanghai.myqcloud.com/demo/your-video.mp4',
  poster: 'https://your-domain.example.com/poster.jpg',
  caption: '视频说明'
}
```

建议：

- COS 中的视频对象开启公开读，或通过自定义域名提供可访问地址
- 视频尽量使用 `mp4` 编码，兼容性最好
- 为视频准备 `poster` 封面图，首屏观感会更好
