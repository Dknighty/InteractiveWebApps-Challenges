const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

const book1 =document.querySelector('[div.id="book1"]')
book1CheckInColor = none
book1StatusStyleColor = STATUS_MAP.overdue.color 
book1Reserve = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
book1Checkout= STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'
book1Checkin = STATUS_MAP.checkin.canCheckout ? 'enabled' : 'disabled'

const book2 =document.querySelector('[div.id="book2"]')
book2CheckInColor = none
book2StatusStyleColor = STATUS_MAP.reserved.color
book2Reserve = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
book2CheckOut= STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'
book2CheckIn = STATUS_MAP.checkin.canCheckout ? 'enabled' : 'disabled'

const book3 =document.querySelector('[div.id="book3"]')
book3CheckInColor = none
book3StatusStyleColor = STATUS_MAP.shelf.color
book3Reserve = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
book3Checkout = STATUS_MAP.checkedOut.canCheckIn ? 'enabled' : 'disabled'
book3Checkin = STATUS_MAP.checkin.canCheckout ? 'enabled' : 'disabled'

document.getElementsByClassName("checkin").style.backgroundColor = "white";

