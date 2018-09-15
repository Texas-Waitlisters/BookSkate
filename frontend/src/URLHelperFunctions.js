/*
Import this with something like:
import URL from '../URLHelperFunctions';

Examples of use: 
URL.toString("The_Name_or_title_of_something") returns "The Name or title of something"
URL.toUrl("The Name or title of something") returns "The_Name_or_title_of_something"
*/
import FilterHelper from './FilterHelper';

class URLHelperFunctions {

	static toString(url) {
		return this.convert(url, '_', ' ');
	}

	static toUrl(string) {
		return this.convert(string, ' ', '_');
	}

	static lastUrlItem(itemNumber) {
		var result = window.location.href;
		var indexOfDash = result.lastIndexOf("-");
		if (itemNumber === 0) {
			if (indexOfDash === -1)
				indexOfDash = result.length;
			return result.substring(result.lastIndexOf("/")+1, indexOfDash);
		}
		else if (itemNumber === 1 && indexOfDash !== -1)
			return result.substring(result.lastIndexOf("-")+1);	
		return result.substring(result.lastIndexOf("/")+1);
	}

	static getSchoolName() {
		var url=window.location.href;
		var schoolName = url.substring(url.indexOf("/classSearch/") + "/classSearch/".length, url.lastIndexOf("/"));
		return this.toString(schoolName);
	}

	static lastItem(item) {
		var result = item;
		return result.substring(result.lastIndexOf("/")+1);
	}

	//Helper method. Use the other two methods instead
	static convert(input, take, convert) {
		console.log("URL Convert Test");
		console.log("Input = " + input);
		var result = "";
		for ( let character of input) {
			if (character === take) {
				result+=convert;
			}
			else {
				result+=character;
			}
		}
		console.log("Output = " + result);
		return result;
	}

	static urlPageNumber(totalPages) {
		let url = window.location.href;
		let indexOfP = url.lastIndexOf("?p=");
		if (indexOfP == -1)
			return 1;
		let pageNumber = url.substring(indexOfP + 3);
		if (pageNumber < 1)
			return 1;
		else return pageNumber;
	}

	static capitalizeWords(words) {
		var index = 0; 
		var result="";
		var afterSpace = false;
		if (words != undefined)
		for (;index < words.length; index++) {
			if (index === 0)
				result += words.charAt(index).toUpperCase();
			else if (words.charAt(index) === " ") {
				afterSpace = true;
				result += words.charAt(index);
			}
			else if (afterSpace) {
				result += words.charAt(index).toUpperCase();
				afterSpace = false;
			}
			else {
				result += words.charAt(index);
			}
		}
		return result;
	}

	static queryString() {
		var result = "";
		let Url = window.location.href;
		if (Url.includes("?")) {
			let queryString = Url.substring(Url.indexOf("?") + 1,Url.length);
			result = queryString;
		}
		return result;
	}

	static plusToSpace(string) {
		return this.convert(string, "+", " ");
	}

	static test() {
		alert(this.getSortItem("default") + "\n"+
			this.getSortDirection(true) + "\n" + 
			"[" + this.getFilters([]) + "]" + "\n" + 
			this.getPage(1));
	}

	static getSearchQuery() {
		var result = "";
		let paramName = "q=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length);
					result = entry;
				}
			}
		} catch(err) {}
		return result;
	}

	static getParamValue(paramName) {
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName+"=")) {
					return param.substring(paramName.length+1);
				}
			}
		} catch(err) {}
		return "";
	}

	static getSortDirection(standard) {
		var result = standard;
		let paramName = "dir=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length);
					if (entry=="asc" || entry=="desc")
					result = entry=="asc";
					console.log(result);
				}
			}
		} catch(err){}
		return result;
	}

	static getFilters(standard, options) {
		var result = standard;
		let paramName = "filters=";
		let qs = this.queryString().split("&");
		try {
			for (var param of qs) {
				if (param.includes(paramName)) {
					let entry = param.substring(paramName.length+1, param.length-1);
					result = [];
					let filters = (entry.split(","));
					for (var filter of filters) {
						if (options.includes(filter)){
							result.push(filter);
						}
					}	
				}
			}
		} catch (err){}	
		return result;
	}

} 
export default URLHelperFunctions;