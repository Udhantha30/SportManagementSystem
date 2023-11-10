const product = [
	{
		id: 0,
		image:'image/storeitems/basketballshoes.jpg',
		title:'Basketball Shoes',
		price: 80,
	},
	{
		id: 1,
		image:'image/storeitems/basketballjersey.jpg',
		title:'Basketball jersey',
		price: 90,
	},
	{
		id: 2,
		image:'image/storeitems/sportscap.jpg',
		title:'Sports cap',
		price: 20,
	},
	{
		id: 3,
		image:'image/storeitems/basketballhelmet.jpg',
		title:'Basketball helmet',
		price: 60,
	},
	{
		id: 4,
		image:'image/storeitems/basketballhexlegsleeves.webp',
		title:'Basketball hex leg sleeves',
		price: 60,
	},
	{
		id: 5,
		image:'image/storeitems/bat.jpg',
		title:'Cricket bat',
		price: 150,
	},
	{
		id: 6,
		image:'image/storeitems/battingpads.jpg',
		title:'Batting pads',
		price: 90,
	},
	{
		id: 7,
		image:'image/storeitems/cricketball.jpg',
		title:'Cricket ball',
		price: 70,
	},
	{
		id: 8,
		image:'image/storeitems/cricketgloves.webp',
		title:'Cricket Gloves',
		price: 80,
	},
	{
		id: 9,
		image:'image/storeitems/crickethelmet.jpg',
		title:'Cricket Helmet',
		price: 10,
	},
	{
		id: 10,
		image:'image/storeitems/cricketjersey.jpg',
		title:'Cricket Jersey',
		price: 85,
	},
	{
		id: 11,
		image:'image/storeitems/rugbyhelmet.jpg',
		title:'Rugby Helmet',
		price: 170,
	},
	{
		id: 12,
		image:'image/storeitems/rugbyball.jpg',
		title:'Rugby Ball',
		price: 80,
	},
	{
		id: 13,
		image:'image/storeitems/rugbyjersey.jpg',
		title:'Rugby Jersey',
		price: 80,
	},
	{
		id: 14,
		image:'image/storeitems/rugbytraininggloves.jpg',
		title:'Rugby Training Gloves',
		price: 10,
	},
	{
		id: 15,
		image:'image/storeitems/rugbyworldcuphoodie.jpg',
		title:'Rugby World Cup Hoodie(men)',
		price: 110,
	},
	{
		id: 16,
		image:'image/storeitems/chessboard.jpg',
		title:'Regular Chessboard',
		price: 100,
	},
	{
		id: 17,
		image:'image/storeitems/lightupchessset.jpg',
		title:'Lightup Chessboard',
		price: 110
	},
	{
		id: 18,
		image:'image/storeitems/3Dprintedchess.jpg',
		title:'3D-printed Chessboard',
		price: 120,
	},
	{
		id: 19,
		image:'image/storeitems/sportsbag.jpg',
		title:'Sports Bag',
		price: 50,
	},
	{
		id: 20,
		image:'image/storeitems/sportsbottle.jpg',
		title:'Sports bottle (1.5L)',
		price: 45,
	},
	{
		id: 21,
		image:'image/storeitems/wristband.jpg',
		title:'Under Armour wrist band',
		price: 45,
	},
	{
		id: 22,
		image:'image/storeitems/kneepad.jpg',
		title:'Knee Pad(Men)',
		price: 45,
	},
	{
		id: 23,
		image:'image/storeitems/headband.jpg',
		title:'Head Band',
		price: 45,
	},
];
const categories = [...new Set(product.map((item)=>
	{return item}))]
	let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
	var {image,title,price} = item;
	return(
		`<div class='box'>
			<div class='img-box'>
				<img class='images' src=${image}></img>
			</div>
		<div class='bottom'>
		<p>${title}</p>
		<h2>$ ${price}.00</h2>`+
		"<button onclick='addtocart("+(i++)+")'><b>Add to cart</b></button>"+
		`</div>
		</div>`
	)
}).join('')

var cart =[];

function addtocart(a){
	cart.push({...categories[a]});
	displaycart();
}
function delElement(a){
	cart.splice(a, 1);
	displaycart();
}

function displaycart(a){
	let j=0, total=0;
	document.getElementById("count").innerHTML=cart.length;

	var button = document.getElementById("BuyNow");
	button.disabled = true;


	if(cart.length==0){
		document.getElementById('cartItem').innerHTML = "Your cart is empty";
		document.getElementById("total").innerHTML = "$"+0+".00";

		button.disabled = true;
		button.classList.add("disabled");
	
	}
	else{
		document.getElementById('cartItem').innerHTML = cart.map((items)=>
		{
			var {image,title,price} = items;
			total=total+price;
			document.getElementById("total").innerHTML = "$"+total+".00";

			button.disabled = false;
			button.classList.remove("disabled");
			
			return(
				`<div class='cart-item'>
				<div class='row-img'>
					<img class='rowimg' src=${image}>
				</div>
				<p style='font-size:16px; color: black'><b>${title}</b></p>
				<h2 style='font-size: 15px; color: black'>$ ${price}.00</h2>`+
				"<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
			);

		}).join('');

	}
}