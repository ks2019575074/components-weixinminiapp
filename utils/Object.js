function Photographer(images, avatar, name, city, introduction, workTime, style, price, photographerUID) {
  this.images = images;
  this.avatar = avatar;
  this.name = name;
  this.city = city;
  this.introduction = introduction;
  this.workTime = workTime;
  this.style = style;
  this.price = price;
  this.photographerUID = photographerUID;
}


function LocalOrderInfo(style, numOfPeople, address, date, time, pickedPhotographerUid,makeupOrderUid,vehicleOrderUid,printOrderUid,userUid,orderCreatTime,payState,photoState,judgement,totalCost) {
  this.style = style;
  this.numOfPeople = numOfPeople;
  this.date = date;
  this.time = time;
  this.address = address;
  this.pickedPhotographerUid=pickedPhotographerUid;
  this.makeupOrderUid = makeupOrderUid;
  this.vehicleOrderUid = vehicleOrderUid;
  this.printOrderUid = printOrderUid;
  this.userUid = userUid;
  this.orderCreatTime = orderCreatTime;
  this.payState = payState;
  this.photoState = photoState;
  this.judgement = judgement;
  this.totalCost = totalCost;
}

function User(openid,uid,authority,nickname,realname,avatar,gender,email,phone,idcard,area,city,province,country){
  this.openid = openid;
  this.uid = uid;
  this.authority = authority;
  this.nickname = nickname;
  this.avatar = avatar;
  this.realname = realname;
  this.gender = gender;
  this.email = email;
  this.phone = phone;
  this.idcard = idcard;
  this.area = area;
  this.city = city;
  this.province = province;
  this.country = country;
}

function Album(cover_url,albumname,type,createtime,photosuid,photographeruid){
  this.cover_url = cover_url;
  this.albumname = albumname;
  this.type = type;
  this.createtime = createtime;
  this.photosuid = photosuid;
  this.photographeruid = photographeruid;
}

var Types = {
  graduate: '毕业照',
  party: '同学聚会',
  portray:'个人写真',
  wedding: '婚纱摄影',
  others: '其他'
}

var styles = {
  business: '商务',
  dark: '暗黑',
  japanese: '日系',
  modurn:'时尚'
}

export{
  Photographer,
  LocalOrderInfo,
  Album,
  User,
  Types,
  styles,
}