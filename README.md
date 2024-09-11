# ZZPlayer
一款沉浸式网页音乐播放器

## 技术选型
- [HeoMusic](https://github.com/zhheo/HeoMusic)
- [MetingJS](https://github.com/metowolf/MetingJS)
- [APlayer](https://github.com/DIYgod/APlayer)
- vite+ts+vue3

本项目参考或复用了以上项目代码，感谢原作者的辛勤付出！！！

## 运行效果
![首页](screenshot/home-page.png)

![播放器](screenshot/player.png)

## roadmap
- [x] 本质只是为了听歌，去掉那些花里胡哨的功能，只保留最原始的
- [x] 自建服务端api，提供本地歌单和网络歌单

## 如何部署
```shell
pnpm i && \
pnpm build
```
然后将构建后的dist目录下的所有文件，上传到服务器即可。

## 数据来源
- 网络歌单, 使用各大平台公开的api接口获取数据
- 本地歌单, 自己准备好的音乐文件按照格式组装即可
