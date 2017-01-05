import { mutating, Node } from 'tweed'

export default class Examples {
  constructor (codeExample) {
    this._codeExample = codeExample
  }

  render () {
    return (
      <div>
        {this._examples.map((ex) =>
          this._codeExample.render(ex)
        )}
      </div>
    )
  }

  _examples = [
    // Counter example
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
        '}',
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

    // Text input example
    {
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
        '        <h1>Hello {this.name}</h1>',
        '      </div>',
        '    )',
        '  }',
        '}',
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
              <h1>Hello {this.name}</h1>
            </div>
          )
        }
      }
    },

    // Tabs example
    {
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
        '          <button on-click={() => this.select(tab)}>',
        "            {this._selected === tab ? '›' : ''} {tab.title}",
        '          </button>',
        '        ))}',
        '        <div>{this._selected}</div> // .render() is implicit',
        '      </div>',
        '    )',
        '  }',
        '}',
        '',
        'class FirstTab implements Tab {',
        "  title = 'First'",
        '  render () {',
        '    return (',
        '      <h1>First Page</h1>',
        '    )',
        '  }',
        '}',
        '',
        'class SecondTab implements Tab {',
        "  title = 'Second'",
        '  render () {',
        '    return (',
        '      <h1>Second Page</h1>',
        '    )',
        '  }',
        '}',
      ].join('\n'),

      component: {
        @mutating _selected: {
          title: 'First',
          render () {
            return (
              <h1>First Page</h1>
            )
          }
        },
        _tabs: [{
          title: 'First',
          render () {
            return (
              <h1>First Page</h1>
            )
          }
        }, {
          title: 'Second',
          render () {
            return (
              <h1>Second Page</h1>
            )
          }
        }],
        select (tab) {
          this._selected = tab
        },
        render () {
          return (
            <div>
              {this._tabs.map((tab) => (
                <button on-click={() => this.select(tab)}>
                  {this._selected.title === tab.title ? '›' : ''} {tab.title}
                </button>
              ))}
              <div>{this._selected}</div>
            </div>
          )
        }
      }
    }
  ]
}
