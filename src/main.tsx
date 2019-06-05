import renderer, { tsx } from '@dojo/framework/core/vdom';
import WidgetBase from '@dojo/framework/core/WidgetBase';
import Block from '@dojo/framework/core/meta/Block';
import myFirstBlock from './my-first.block';

class Widget extends WidgetBase<any> {
	render() {
		const result = this.meta(Block).run(myFirstBlock)(this.properties.text);
		return (
			<div>{result}</div>
		);
	}
}

class App extends WidgetBase {
	render() {
		return (
			<div>
				<Widget text="a"/>
				<Widget text="b"/>
			</div>
		);
	}
}

const r = renderer(() => <App />);
r.mount({ domNode: document.getElementById('app')! });
