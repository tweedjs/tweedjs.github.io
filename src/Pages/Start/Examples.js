import { mutating, Node } from 'tweed'

export default class Examples {
  constructor (codeExample) {
    this._codeExample = codeExample
  }

  render () {
    return (
      <div id='examples'>
        {this._examples.map((ex) =>
          this._codeExample.render(ex)
        )}
      </div>
    )
  }

  _examples = [
    {
      code: [
        'class Counter {',
        '  @mutating count = 0',
        '',
        '  render () {',
        '    return (',
        '      <button on-click={() => this.count++}>',
        '        Clicked {this.count} times',
        '      </button>',
        '    )',
        '  }',
        '}'
      ].join('\n'),

      component: {
        @mutating count: 0,

        render () {
          return (
            <button on-click={() => this.count++}>
              Clicked {this.count} times
            </button>
          )
        }
      }
    },

    {
      title: 'Reactive and One-Way',
      code: [
        'class TextInput {',
        "  @mutating name = 'World'",
        '',
        '  _onInput (event) {',
        '    this.name = event.target.value',
        '  }',
        '',
        '  render () {',
        '    return (',
        '      <div>',
        '        <input',
        "          type='text'",
        '          value={this.name}',
        '          on-input={this._onInput.bind(this)}',
        '        />',
        '        <h2>Hello {this.name}</h2>',
        '      </div>',
        '    )',
        '  }',
        '}'
      ].join('\n'),

      component: {
        @mutating name: 'World',

        _onInput (event) {
          this.name = event.target.value
        },

        render () {
          return (
            <div>
              <input
                type='text'
                value={this.name}
                on-input={this._onInput.bind(this)}
              />
              <h2>Hello {this.name}</h2>
            </div>
          )
        }
      }
    },

    {
      title: 'Natural Polymorphism',
      code: [
        'interface Tab {',
        '  title: string',
        '  render (): Node',
        '}',
        '',
        'class Tabs {',
        '  @mutating private _selected: Tab',
        '  private readonly _tabs: Tab[]',
        '',
        '  constructor (tabs: Tab[]) {',
        '    this._tabs = tabs',
        '    this._selected = tabs[0]',
        '  }',
        '',
        '  select (tab: Tab) {',
        '    this._selected = tab',
        '  }',
        '',
        '  render () {',
        '    return (',
        '      <div>',
        '        {this._tabs.map((tab) => (',
        '          <button',
        '            on-click={() => this.select(tab)}',
        '            style-textDecoration={',
        '              this._selected === tab',
        "                ? 'underline'",
        "                : 'none'",
        '            }',
        '          >{tab.title}</button>',
        '        ))}',
        '        <div>{this._selected}</div> // .render() is implicit',
        '      </div>',
        '    )',
        '  }',
        '}'
      ].join('\n'),

      component: new class {
        @mutating _selected

        constructor () {
          const tabs = [{
            title: 'Dashboard',
            render () {
              return (
                <div>
                  <h2>This is a dashboard</h2>
                  <p>
                    <i style-marginRight='10px'>👈</i>
                    TypeScript is optional, but officially supported!
                  </p>
                </div>
              )
            }
          }, {
            title: 'About',
            render () {
              return (
                <div>
                  <h2>This is the about page</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              )
            }
          }]

          this._tabs = tabs
          this._selected = tabs[0]
        }

        select (tab) {
          this._selected = tab
        }

        render () {
          return (
            <div>
              {this._tabs.map((tab) => (
                <button
                  on-click={() => this.select(tab)}
                  style-textDecoration={
                    this._selected === tab
                      ? 'underline'
                      : 'none'
                  }
                >{tab.title}</button>
              ))}
              <div>{this._selected}</div>
            </div>
          )
        }
      }()
    },

    {
      title: 'Centralized State Management',
      code: [
        'class StateContainer {',
        "  @mutating name = 'Friend'",
        '  @mutating age = 30',
        '}',
        '',
        'class Stateless {',
        '  constructor (state) {',
        '    this._state = state',
        '  }',
        '',
        '  render () {',
        '    return (',
        '      <p>',
        '        Hello {this._state.name},',
        '        you are {this._state.age} years old.',
        '      </p>',
        '    )',
        '  }',
        '}',
        '',
        'class Editor {',
        '  constructor (state) {',
        '    this._state = state',
        '',
        '    this._setName = this._setName.bind(this)',
        '    this._setAge = this._setAge.bind(this)',
        '  }',
        '',
        '  _setName (event) {',
        '    this._state.name = event.target.value',
        '  }',
        '',
        '  _setAge (event) {',
        '    this._state.age = parseInt(event.target.value || 0)',
        '  }',
        '',
        '  render () {',
        '    return (',
        '      <div>',
        '        <input',
        "          type='text'",
        '          value={this.state.name}',
        '          on-input={this._setName}',
        '        />',
        '        <input',
        "          type='number'",
        '          value={this.state.age}',
        '          on-input={this._setAge}',
        '        />',
        '      </div>',
        '    )',
        '  }',
        '}'
      ].join('\n'),

      component: new class {
        @mutating _name = 'Friend'
        @mutating _age = 30

        render () {
          return (
            <div>
              <p>Hello {this._name}, you are {this._age} years old.</p>
              <div>
                <input
                  type='text'
                  value={this._name}
                  on-input={(e) => { this._name = e.target.value }}
                />
                <input
                  type='number'
                  value={this._age}
                  on-input={(e) => { this._age = parseInt(e.target.value || 0) }}
                />
              </div>
            </div>
          )
        }
      }()
    }
  ]
}
