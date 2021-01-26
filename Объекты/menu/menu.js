
class Component{
	constructor(name){
		this.name = name;
	}
}

class Menu extends Component{
	constructor(name, type){
		super(name);
		this.name = name;
		this.type = type;

		this.itemList = ['item1', 'item2'];
	}

	showItems() {
		console.log(this.itemList);
	}
}


let myMenu = new Menu("Ivan", "Human");

myMenu.showItems();
