import React, { Component } from 'react';
import { Col,
Row,
Slide,
Slider,
Caption,
Card,
CardTitle,
SideNav,
SideNavItem,
Button,
Pagination
  } from 'react-materialize';

class App extends Component {
  render(){
    return (
      <div>
<br />
      <SideNav
        trigger={<Button icon="menu" />}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            background: 'https://placeimg.com/640/480/tech',
            image: 'https://materializecss.com/images/yuna.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem href='#!icon' icon='person_outline'>Profil Saya Icon</SideNavItem>
        <SideNavItem href='#!second' icon="help">Hubungi Kami</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Product</SideNavItem>
        <SideNavItem waves href='#!Kesehatan'>Kesehatan</SideNavItem>
        <SideNavItem waves href='#!Komputer'>Komputer & Aksesoris</SideNavItem>
        <SideNavItem waves href='#!Gaming'>Gaming</SideNavItem>
        <SideNavItem waves href='#!Kamera'>Kamera</SideNavItem>
        <SideNavItem waves href='#!Olahraga'>Olahraga</SideNavItem>
        <SideNavItem waves href='#!FashionPria'>Fashion Pria</SideNavItem>
        <SideNavItem waves href='#!Fashion-Wanita'>Fashion Wanita</SideNavItem>
      </SideNav>
      <br />
        <Slider>
          <Slide image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="Slider1" />}>
            <Caption>
              <h3>
              This is our big Tagline!
              </h3>
              <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
              </h5>
            </Caption>
          </Slide>

          <Slide image={<img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" alt="Slider2" />}>
            <Caption placement="left">
              <h3>
              Left Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
              </h5>
            </Caption>
          </Slide>

          <Slide image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" alt="Slider3" />}>
            <Caption placement="right">
              <h3>
              Right Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
              Heres our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>
                Hot list
        <Row className="center-align">
          <Col>
          </Col>
          <Col>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio
              </CardTitle>
            }
            >
              Audio Technica mulai dari <mark style={{backgroundColor:"red"}}>Rp. 900 Rb</mark>
          </Card>
          </Col>
          <Col>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone
              </CardTitle>
            }
            >
              Smartphone Samsung mulai dari <mark style={{backgroundColor:"red"}}>Rp. 200 Rb</mark>
          </Card>
          </Col>
          <Col>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Squishy
              </CardTitle>
            }
            >
              squishy mulai dari <mark style={{backgroundColor:"red"}}>Rp. 5 Rb</mark>
          </Card>
          </Col>
          <Col>
          <Card
            className="small"
            header={
              <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Action Figure
              </CardTitle>
            }
            >
              Marvel Figure mulai dari <mark style={{backgroundColor:"red"}}>Rp. 50 Rb</mark>
          </Card>
          </Col>

        </Row>
<Pagination activePage={2} maxButtons={8} />
      </div>
    );
  }
}

export default App;
