shargs-example-sync-deepthought-config-env-argv is a sample application of [shargs][shargs] 🦈.

See the [`shargs` github repository][shargs] for more details!

[![node version][shield-node]][node]
[![license][shield-license]][license]
[![PRs Welcome][shield-prs]][contribute]

## Setup

```bash
$ git clone https://github.com/Yord/shargs-example-sync-deepthought-config-env-argv.git
$ cd shargs-example-sync-deepthought-config-env-argv
$ npm i
$ chmod +x ./deepThought
```

## Example

This repository is an example how to use several layers of configuration with [shargs][shargs].
The program first reads configurations from `config.json`, then from environment variables,
and finally from command-line arguments.
Later configurations override earlier ones.
The program can be found in the [`deepThought`][deepThought] script.

## Run the Example

The example may be run with different parameters:

### Printing Usage Documentation

Providing a `--help` flag:

```bash
$ ./deepThought --help
```

Or providing the `DT_HELP=true` environment variable:

```bash
$ DT_HELP=true ./deepThought
```

Prints the following text to the console:

```bash
deepThought [-a|--answer] [-h|--help]                                           
deepThought ask [--format] [--no-html] [-h|--help] (<question>)                 
                                                                                
-a, --answer=<number>    The answer. [default: 42]                              
-h, --help               Print this help message and exit.                      
ask                      Ask a question. [required]                             
    --format=<json|xml>  Respond either with json or xml. [default: json]       
    --no-html            Removes HTML tags.                                     
    -h, --help           Print this help message and exit.                      
    <question>           State your question. [required]                        
                                                                                
Deep Thought was created to come up with the Answer to The Ultimate Question of 
Life, the Universe, and Everything.                                             
```

Providing `ask --help`:

```bash
$ ./deepThought ask --help
```

Or providing `DT_ASK__HELP=true`:

```bash
$ DT_ASK__HELP=true ./deepThought
```

Prints text in a different usage format:

```bash
deepThought ask [--format] [--no-html] [-h|--help] (<question>)                 
                                                                                
--format=<json|xml> [default: json]                                             
    Respond either with json or xml.                                            
--no-html                                                                       
    Removes HTML tags.                                                          
-h, --help                                                                      
    Print this help message and exit.                                           
<question> [required]                                                           
    State your question.                                                        
                                                                                
Deep Thought was created to come up with the Answer to The Ultimate Question of 
Life, the Universe, and Everything.                                             
```

### The Answer to the Ultimate Question

Providing more complex arguments:

```bash
$ DT_ANSWER=43 DT_ASK__NO_HTML=true ./deepThought ask --no-html "What is life?"
```

Prints the following text to the console:

```bash
The answer is: 43
{
  "answer": 43,
  "ask": {
    "format": "json",
    "_": [],
    "html": false,
    "question": "What is life?"
  },
  "_": []
}
```

Please note, the following:

1.  `{"format": "json"}` comes from `config.json`
    and is neither overridden by environment variables nor command-line arguments.
2.  `{"answer": 43}` comes from `DT_ANSWER=43`, which overrides `{"answer": 42}` from `config.json`.
3.  `{"html": false}` comes from `ask --no-html`, which overrides `DT_ASK__NO_HTML=true`.
4.  `{"question": "What is life?"}` comes from `ask "What is life?"`.

### Error Output

Providing no `ask` command:

```bash
$ ./deepThought --answer 23
```

Prints the following error:

```bash
RequiredOptionMissing: An option that is marked as required has not been provided.
```

Providing a wrong `--format`:

```bash
$ ./deepThought ask --format csv
```

Prints the following error:

```bash
RequiredOptionMissing: An option that is marked as required has not been provided.
ValueRestrictionsViolated: A value lies outside the allowed values of an option.
```

## Reporting Issues

Please report issues [in the `shargs` tracker][issues]!

## License

`shargs-example-sync-deepthought-config-env-argv` is [MIT licensed][license].



[contribute]: https://github.com/Yord/shargs#contributing
[deepThought]: https://github.com/Yord/shargs-example-sync-deepthought-config-env-argv/blob/master/deepThought
[issues]: https://github.com/Yord/shargs/issues
[license]: https://github.com/Yord/shargs-example-sync-deepthought-config-env-argv/blob/master/LICENSE
[node]: https://nodejs.org/
[shargs]: https://github.com/Yord/shargs
[shield-license]: https://img.shields.io/badge/license-MIT-yellow.svg?labelColor=313A42
[shield-node]: https://img.shields.io/node/v/shargs?color=red&labelColor=313A42
[shield-prs]: https://img.shields.io/badge/PRs-welcome-green.svg?labelColor=313A42