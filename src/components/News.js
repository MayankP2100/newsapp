import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="container row col-md-auto mx-auto">
          <NewsItem
            title="Apple Watch Series 9 will be another boring update – here’s why I’ll still buy one"
            imageUrl="https://bgr.com/wp-content/uploads/2022/09/apple-iphone-14-event-175.jpg?quality=82&strip=all"
            description="The new Apple Watch Series 9 is expected to be announced at the same September event where Apple will unveil the iPhone 15 series. While …\nThe post Apple Watch Series 9 will be another boring update – here’s why I’ll still buy one appeared first on BGR."
          />
          <NewsItem
            title="Immer wieder sonntags KW 31"
            imageUrl="https://stadt-bremerhaven.de/wp-content/uploads/2022/07/Kaffee-Sonntags.jpg"
            description="Die aktuelle Woche ist fast verstrichen und natürlich hat es wie immer eine breite Welle von News aus der großen, weiten Welt der Technik gegeben. Beispielsweise habe ich mich dem Hype ergeben und tatsächlich mal wieder ein PC-Spiel direkt zum...Zum Beitrag"
          />
          <NewsItem
            title="Hình CAD iPhone 15 Pro mới với viền mỏng 1.5mm so với các thế hệ iPhone trước"
            imageUrl="https://photo2.tinhte.vn/data/attachment-files/2023/08/6520784_cover-CAD-iPhone-15-Pro-vien-mong.jpg"
            description="Chúng ta đã nghe nhiều về việc iPhone mới sẽ có viền màn hình rất mỏng, mỏng hơn so với iPhone 14 Pro hiện tại. Nhưng nếu an hem vẫn chưa hình dung được nó mỏng như thế nào qua những con số, thì mời anh em xem hình render dựa trên thông số đó."
          />
          <NewsItem
            title="「Apple Watch Series 9」はチップがS9になる以外は変更なし"
            imageUrl="https://netafull.net/wp-content/uploads/2023/08/415b7j0N7YL._SL500.jpg"
            description="MacRumorsが「Apple Watch Series 9」はチップがS9になる以外は変更なしというリーカーの情報を伝えています。Apple Watch Series 9 'Basically Unchan...\n投稿 「Apple Watch Series 9」はチップがS9になる以外は変更なし は ネタフル に最初に表示されました。"
          />
          <NewsItem
            title="Kai Cenat: Police charge Twitch streamer after PS5 giveaway mayhem - BBC"
            imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/2A18/production/_130667701_gettyimages-1592937131.jpg"
            description="Kai Cenat: Police charge Twitch streamer after PS5 giveaway mayhem - BBC"
          />
          <NewsItem
            title="USWNT vs. Sweden: How to Watch and Stream, Match Preview, TV Channels & Start Time | 2023 FIFA Women's World Cup - U.S. Soccer"
            imageUrl="https://cdn.ussoccer.com/-/media/project/ussf/2023-article-images/8423_wntpreview_p1.ashx?h=1080&la=en-US&w=1920&rev=d0009cdf186c45718855ac1f655db7eb&hash=E55322799E5FF6B1ACDDCB169D579E43"
            description="Watch USA-Sweden on Sunday, Aug. 6 at 5 a.m. ET (7 p.m. AET)"
          />
        </div>
      </div>
    );
  }
}
