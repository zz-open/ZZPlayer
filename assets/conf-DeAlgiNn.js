function u(e){const s=/\("(\S+)"\)/.exec(e);return s?s[1]:""}function a(e){return e.replace(/[^\x00-\x7F]/g,t=>encodeURIComponent(t))}async function r(e){try{return(await(await fetch(e)).json()??[]).map(n=>({name:n.name,artist:n.artist,url:a(n.url),cover:a(n.cover),lrc:a(n.lrc)}))}catch(t){return console.log("获取本地歌单文件异常:",t),alert("获取本地歌单出错"),Promise.resolve([])}}const y=3,p=.8,o="netease",c="12554572272",l="playlist",_="music_bg",f="heoMusic-page";function L(){return{id:c,server:o,type:l}}async function d(){return{songs:await r("/playlist/default.json")}}function g(){return[{name:"默认歌单",url:"/playlist/default.json"},{name:"《我很忙》- 周杰伦",url:"/playlist/jay.json"}]}function E(){return[{name:"默认歌单",id:"12554572272",server:"netease",type:"playlist"},{name:"歌单1",id:"8835928221",server:"netease",type:"playlist"},{name:"歌单2",id:"9379831714",server:"netease",type:"playlist"}]}function v(){return[{name:"默认歌单",id:"9321051544",server:"tencent",type:"playlist"}]}export{y as D,f as a,p as b,E as c,v as d,u as e,r as f,g,d as h,L as i,_ as j};