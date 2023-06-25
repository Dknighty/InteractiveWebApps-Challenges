const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const shipping = 400
const customers = '1'
const place = 'NK'
currency = '$'
shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

if (shoes + batteries + pens + shirts >= 1000 && 60 ) {
	if (place === 'NAM' && customers < 2) {
			if (place = 'RSA')
		    shipping = 0 || calcShipping
		}
	}
if (place === 'RSA') { 
        shipping = 400 && currency == 'R'
     }
    if (place === 'NAM'){
    shipping = 600 
    }
    else {shipping === 800
    }
if (shipping == 0 && customers !== 1)
 { console.log(FREE_WARNING) } 

if (place === 'NK'){
    console.log(BANNED_WARNING) 
    console.log('price', currency, shoes + toys + batteries + pens + shirts + shipping)
}