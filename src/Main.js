
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2018, 12, 23) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>你好哇！小阿波！</h1>
                    <p >已经很久没有听过新歌，一直都还哼着很多年前的小曲。这老掉牙的BGM希望能够应景吧！</p>
                    <p>从2018年的12.23一路走过，想来不过两年时光，倒也过得绵长。倘若到了真正绵长的第八十个纪念日，我们便会觉得这些日子白驹过隙了罢！这两年我们经历
						了什么，留下了什么些回忆呢？
				</p>
                    <p>恰巧一句“求代刷”使我们结识，幸亏你当时发给我的是语音。没想到我们之前还有过代取快递的小插曲，因为那时候的我真的一穷二白拼命打工。也恰好ab能有
						拉近距离的高数需要考，也恰好…………，可是我觉得并不是这么些巧合让我们走到了一起。除了命中注定之外，就只剩下定有此劫了。我算是个八成的唯物主义者
						唯有在积德和你身上，我心存虔诚，甚至盲目的信仰。
                </p>
                    <p>“我也有很多很多喜欢你”，我曾经想这么回复你的那句表白。但是两年前的我毕竟有点羞涩，竟然手足无措起来。我只记得当时愣了一会，和舍友开始商量对策起来。
						后来的后来，没有什么催人泪下、惊天泣鬼的浪漫情境，不过是表态我们在一起吧。虽是觉得少许的遗憾，倒也是难得的青涩回忆吧。
                </p>
                    <p>我这不善表达，不会浪漫的呆子，真真是要此次想出新花样。实话实说费心竭力，倒也乐在其中。之前许诺下的宏大的局，不过是惊喜分之一罢了。难道我的每一次浪漫
						在ab心里不够宏伟吗？做这些的目的很简单，取悦ab，取悦我自己，以及取悦我们的过去，现在和未来。至于小王子的故事，童话里没有说清道明小王子的去向。我却认为这是一种
						悲剧式的浪漫，他无论是灵魂回到玫瑰身边还是被毒死，恐怕都不能真正意义上做到和起初的玫瑰重归于好了。ab其实也不过是世间的百万个百万株玫瑰分之一，但是ab驯服了我，
						这就是唯一。要是我像小王子一样把ab关禁闭，恐怕我也会遇见那条毒蛇罢。我希望的是带着ab一起浪迹天涯或者在世界一角安稳生活，时不时去看看世界，吃喝全球。之前送ab的那条项链便是，
						小王子的B612星球是球体，有面包树和玫瑰，但是项链上是弯弯月亮。能出去看看多好，不是吗？
                </p>
                    <p>我希望赶紧迎来两年后的同居生活，即使异国发展的初期我累一点，生活拮据一点。但是情感世界是不能拮据的，没了ab的滋润要着精神荒漠有何用呢？
                </p>
                    <p>最后祝阿扁两周年纪念日快乐哦！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的♥阿丹</p>
                        <p>2020年12月23日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main