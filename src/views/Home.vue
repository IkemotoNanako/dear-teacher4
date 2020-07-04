<template>
  <div class="home">
    <div>
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
        <div class="title">Sloth health</div> 
    </div>
    <img src="https://media.istockphoto.com/vectors/cute-hanging-sloth-vector-id1093750176?k=6&m=1093750176&s=612x612&w=0&h=tO5AnsToo9WqSeKXIXDDGPGzANAUVLs8laf1WvIPMfI=" alt="" class="sloth"> 
    <header>
        <h1>SLOTH HEALTH  体調管理代行サービス</h1>
        <nav>
            <ul class="inner-nav">
                <li class="menu"><a href="#1">コンセプト</a></li>
                <li class="menu"><a href="#2">使い方</a></li> 
            </ul>
        </nav>
    </header>
    
    <div id="hamburger" @click="naviOpen" :class="{'is-active': active}">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <transition name="navi">
        <nav class="menu-content" v-show="navi"> 
        <p class="menu-title">Sloth</p>
          <ul class="menu-content_inner">
            <li><a href="#1">コンセプト</a></li>
            <li><a href="#2">使い方</a></li>
            
          </ul>
        </nav>
    </transition>
    <div>
      <div v-if="bad" class="health-tell bad">疲れているよ<br>十分頑張っているから休めるだけ休んでね</div>
      <div v-if="soso" class="health-tell soso">疲れ気味だよ<br>自分の体を大切にね</div>
      <div v-if="good" class="health-tell good">記録上はまだ大丈夫だよ<br>でも、心の声を優先して休んでね</div>
      <table>
        <tr>
          <th>日付</th>
          <th>寝つき</th>
          <th>起床</th>
          <th>睡眠の質</th>
          <th>心の安定</th>
          <th>食欲</th>
          <th>気力</th>
          <th>備考</th>
        </tr>
        <tr>
          <td>{{now}}</td>
          <td>
          <select v-model="selected1">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected2">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected3">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected4">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected5">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected6">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td><input type="text"></td>
        </tr>



        <tr>
          <td>{{yesterday}}</td>
          <td>
          <select v-model="selected7">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected8">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected9">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected10">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected11">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td>
          <select v-model="selected12">
            <option disabled value="">選択して下さい</option>
            <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
            </option>
        </select>
          </td>
          <td><input type="text"></td>
        </tr>



      </table>
      <button @click="healthcount">決定</button>
    </div>
    
    <div id="top-btn" class="page-top" v-scroll-to = "'body'">↑</div>
    <div class="concept" id="1">
        <h2>コンセプト</h2>
        <p>ついつい頑張りすぎてしまう、自分の体調に気づきにくい、そんな悩みを持つ人のために作りました</p>
    </div>
    <div class="explain" id="2">
        <h2>使い方</h2>
        <p>その日の体調を〇✕？(わからない)の３つから選んで記入してね<br>今日の状態をあなたに伝えるよ<br>お医者さんにこの画面を見せてもいいよ<br>もっと記入したいことがあったら備考に書いてね</p>
    </div>
    <button @click="account">登録</button>
  </div>
</template>

<script>
var date = new Date()
var yesterdaydate = date.getDate() -1
export default {
  data(){
    return{
      selected1: '',
      selected2: '',
      selected3: '',
      selected4: '',
      selected5: '',
      selected6: '',
      selected7: '',
      selected8: '',
      selected9: '',
      selected10: '',
      selected11: '',
      selected12: '',
      options: [
        { id: 1, name: '〇' },
        { id: 2, name: '✕' },
        { id: 3, name: '？' }
                ],
     now: date.getMonth() + "/" + date.getDate(),
     yesterday: date.getMonth() + "/" + yesterdaydate,
     bad: false,
     soso: false,
     good: false,
     active: false,
     navi: false
    };
  },
  methods: {
      account() {
        this.$router.push('/Account')
      },
      naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    },
    healthcount() {
      this.health=0;
      console.log(this.selected1);
      if (this.selected1 == "✕") {
        this.health++;
      }
      if (this.selected2 == "✕") {
        this.health++;
      }
      if (this.selected3 == "✕") {
        this.health++;
      }
      if (this.selected4 == "✕") {
        this.health++;
      }
      if (this.selected5 == "✕") {
        this.health++;
      }
      if (this.selected6 == "✕") {
        this.health++;
      }
      if (this.selected1 == "？") {
        this.health+=2;
      }
      if (this.selected2 == "？") {
        this.health+=2;
      }
      if (this.selected3 == "？") {
        this.health+=2;
      }
      if (this.selected4 == "？") {
        this.health+=2;
      }
      if (this.selected5 == "？") {
        this.health+=2;
      }
      if (this.selected6 == "？") {
        this.health+=2;
      }
      console.log(this.health);
      if (this.health >= 3){
        this.bad=true;
        this.soso=false;
        this.good=false;
      } else if (this.health>=1){
        this.bad=false;
        this.soso=true;
        this.good=false;
      } else {
        this.bad=false;
        this.soso=false;
        this.good=true;
      }
    }  
  }
};



</script>
<style scoped>
/*表*/
table {
   margin-left: 50px
 }
 button {
   margin-left: 800px
 }
 /*体調通知*/
 .health-tell {
   text-align:center;
   margin: 50px;
   font-size: 20px;
   background: #bae2fd;
   padding: 20px;
   border-radius: 20px;

 }
 /*背景デザイン*/

html, body {
    height: 100%;
  }
  
  .class {
    background: #eee;
  }
  
  body {
    justify-content: center;
    align-items: center;
  }
  
  .box {
    width: 300px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, .2);
    background: lighten(#f0f4c3, 10%);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }
  
  .wave {
    opacity: .4;
    position: absolute;
    top: 3%;
    left: 50%;
    background: #0af;
    width: 500px;
    height: 500px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 3000ms infinite linear;
  }
  
  .wave.-three {
    animation: drift 5000ms infinite linear;
  }
  
  .wave.-two {
    animation: drift 7000ms infinite linear;
    opacity: .1;
    background: yellow;
  }
  
  .box:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }
  
  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    line-height: 300px;
    text-align: center;
    transform: translate3d(0, 0, 0);
    color: white;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    letter-spacing: .4em;
    font-size: 24px;
    text-shadow: 0 1px 0 rgba(black, .1);
    text-indent: .3em;
  }
  @keyframes drift {
    from { transform: rotate(0deg); }
    from { transform: rotate(360deg); }
  } 
  /*header*/

header {
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    display: flex;
    margin-top: 30px;
    margin-bottom: 50px;
}
.inner-nav {
    display: flex;
    justify-content: center;
    line-height: 60px;
    list-style: none;
    padding-left: 60px;
    padding-top: 15px;
}
h1 {
    color: #000;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    font-style: italic;
}
.menu {
    padding: 0 20px;
    cursor: pointer;
}
a {
    text-decoration: none;
    color: #000;
}

/*ハンバーガーメニュー*/


#hamburger.is-active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
}
#hamburger.is-active span:nth-of-type(2) {
    opacity: 0;
}
#hamburger.is-active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
}
@media screen and (max-width: 768px) {
    .menu {
        display: none;
    }
    .menu-content {
        display: block;
    }
    .menu-content .menu-title {
        margin: 40px 20px;
        font-size: 2.2rem;
        color: #333333;
        text-align: left;
        font-weight: bold;
        font-style: initial;
    }
}
.menu-content {
    width: calc(100% - 80px);
    height: 100%;
    text-align: center;
    transition: .2s;
    position: fixed;
    top: 0;
    background: #fff;
    color: #333333;
    box-shadow: 80px 0 rgba(38, 149, 213, 0.3);
    z-index: 10;
}
.menu-content li a{
    color: #333333;
    margin: 15px;
    padding: 5px;
    border-bottom: 0.5px solid #26a3d5;
    display: block;
}
.memu-content li {
    width: 100%;
    text-align: left;
}

@media screen and (max-width: 768px) {
    #hamburger {
        width: 40px;
        height: 40px;
        position: absolute;
        cursor: pointer;
        z-index: 100;
        right: 20px;
        transition: .4s;
        top: 20px;
        position: fixed;
    }
    #hamburger span {
        background-color: #000000;
        position: absolute;
        left: 2px;
        display: block;
        width: 35px;
        height: 2px;
        transition: .8s;
    }
    #hamburger span:nth-of-type(1) {
        top: 10px;
    }
    #hamburger span:nth-of-type(2) {
        top: 20px;
    }
    #hamburger span:nth-of-type(3) {
        top: 30px;
    }

}

/*TOPへ戻るボタン*/

#top-btn {
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: fixed;
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
}
/*ナマケモノのイラスト*/

.sloth {
    width: 300px;
    height: auto;
    display: inline-block;
    border-radius: 50%;
    padding: 20px 0 0 20px;
}
/*コンセプト・説明*/
h2{
    padding:30px;
}
p {
    padding: 10px 40px;
    line-height: 130%;
    font-size: 20px
}
/*レスポンシブ対応 ハンバーガーメニュー以外*/
@media screen and (max-width: 768px) {
    h1 {
        font-size: 35px;
    }
    .sloth {
        display: none;
    }
    header {
        margin-top: 300px ;
    }
    .inner-nav {
        display: none;
    }
    .title {
        text-shadow: 2px 2px 3px grey;
    }
    table {

    }
}
 
</style>


