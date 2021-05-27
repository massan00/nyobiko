/**
 *名前の文字列を渡すと診断結果を返す関数
 *@param {string} user ユーザーの名前
 *@return {string} 診断結果
 */
function assessment(user) {
    const userName = user;
    const answers = [
        `${userName}のいいところは声です。${userName}の特徴的な声は皆を惹きつけ、心に残ります。`,
        `${userName}のいいところはまなざしです。${userName}に見つめられた人は、気になって仕方がないでしょう。`,
        `${userName}のいいところは情熱です。${userName}の情熱に周りの人は感化されます。`,
        `${userName}のいいところは厳しさです。${userName}の厳しさがものごとをいつも成功に導きます。`,
        `${userName}のいいところは知識です。博識な${userName}を多くの人が頼りにしています。`,
        `${userName}のいいところはユニークさです。${userName}だけのその特徴が皆を楽しくさせます。`,
        `${userName}のいいところは用心深さです。${userName}の洞察に、多くの人が助けられます。`,
        `${userName}のいいところは見た目です。内側から溢れ出る${userName}の良さに皆が気を惹かれます。`,
        `${userName}のいいところは決断力です。${userName}がする決断にいつも助けられる人がいます。`,
        `${userName}のいいところは思いやりです。${userName}に気をかけてもらった多くの人が感謝しています。`,
        `${userName}のいいところは感受性です。${userName}が感じたことに皆が共感し、わかりあうことができます。`,
        `${userName}のいいところは節度です。強引すぎない${userName}の考えに皆が感謝しています。`,
        `${userName}のいいところは好奇心です。新しいことに向かっていく${userName}の心構えが多くの人に魅力的に映ります。`,
        `${userName}のいいところは気配りです。${userName}の配慮が多くの人を救っています。`,
        `${userName}のいいところはその全てです。ありのままの${userName}自身がいいところなのです。`,
        `${userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる${userName}が皆から評価されています。`
    ];
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i=0;i<user.length; i++) {
        sumOfCharCode += user.charCodeAt(i);
    }

    const index = sumOfCharCode % answers.length;
    return answers[index];
}

/**
 * 指定した子要素をすべて削除する
 * @param {HTMLElement} element
 */
const removeAllChildren = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const userNameInput = document.querySelector('#user-name');
const assessmentButton = document.querySelector('#assessment');
const resultDivided = document.querySelector('#result-area');
const tweetDivided = document.querySelector('#tweet-area');

const diagnosis = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    removeAllChildren(tweetDivided);


    const header = document.createElement('h3');
    header.textContent = '診断結果';
    resultDivided.appendChild(header);

    const p = document.createElement('p');
    const result = assessment(userName);
    p.textContent = result;
    resultDivided.appendChild(p);


    const anchor = document.createElement('a');
    const hrefValue = "https://twitter.com/intent/tweet?button_hashtag=" + encodeURIComponent('あなたのいいところ') + "&ref_src=twsrc%5Etfw";

    anchor.setAttribute('href', hrefValue);
    anchor.className = "twitter-hashtag-button";
    anchor.setAttribute('data-text', result);
    anchor.textContent = 'Tweet #あなたのいいところ';

    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js' );
    tweetDivided.appendChild(script);


    userNameInput.value = '';
    userNameInput.focus();
}

assessmentButton.addEventListener('click', () => {
    diagnosis();
});

userNameInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        diagnosis();
    }
});

console.assert(
  assessment('太郎') === assessment('太郎'),
  '戻り値が正しくありません'
);
