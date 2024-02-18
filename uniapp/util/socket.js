import io from 'socket.io-client'

export class Ws {
	ws
	wsUrl
	openCallback
	messageCallback
	constructor(wsUrl, opt) {
		this.ws = null
		this.wsUrl = wsUrl
		this.openCallback = opt?.openCallback || function () {}
		this.messageCallback = null

		this.connect()
	}

	connect() {
		const socket = this.ws = io(this.wsUrl);
		socket.on('connect', function() {
			console.log('Connected');
		});
		socket.on('events', this.onEvents.bind(this));
		socket.on('exception', this.onException.bind(this));
		socket.on('disconnect', this.onDisconnect.bind(this));
	}
	
	onEvents(data) {
		// console.log("events", data)
		this?.messageCallback && this.messageCallback(data)
	}
	
	send(event, data) {
		this.$ws.emit(event, data)
	}
	
	onException(data) {
		
	}
	
	onDisconnect() {}
}