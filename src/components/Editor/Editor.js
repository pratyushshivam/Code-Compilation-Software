import {
    Button,
    Grid,
    IconButton,
    TextareaAutosize,
    Typography,
    Tooltip,
} from '@material-ui/core'
import '../assets/scss/Editor.scss'
import React, { useState } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/ada'
import 'brace/mode/apache_conf'
import 'brace/mode/applescript'
import 'brace/mode/asciidoc'
import 'brace/mode/assembly_x86'
import 'brace/mode/autohotkey'
import 'brace/mode/batchfile'
import 'brace/mode/bro'
import 'brace/mode/c9search'
import 'brace/mode/c_cpp'
import 'brace/mode/cirru'
import 'brace/mode/clojure'
import 'brace/mode/cobol'
import 'brace/mode/coffee'
import 'brace/mode/coldfusion'
import 'brace/mode/csharp'
import 'brace/mode/css'
import 'brace/mode/curly'
import 'brace/mode/dart'
import 'brace/mode/django'
import 'brace/mode/d'
import 'brace/mode/dockerfile'
import 'brace/mode/dot'
import 'brace/mode/drools'
import 'brace/mode/eiffel'
import 'brace/mode/ejs'
import 'brace/mode/elixir'
import 'brace/mode/elm'
import 'brace/mode/erlang'
import 'brace/mode/forth'
import 'brace/mode/fortran'
import 'brace/mode/ftl'
import 'brace/mode/gcode'
import 'brace/mode/gherkin'
import 'brace/mode/gitignore'
import 'brace/mode/glsl'
import 'brace/mode/gobstones'
import 'brace/mode/golang'
import 'brace/mode/groovy'
import 'brace/mode/haml'
import 'brace/mode/handlebars'
import 'brace/mode/haskell_cabal'
import 'brace/mode/haskell'
import 'brace/mode/haxe'
import 'brace/mode/hjson'
import 'brace/mode/html_elixir'
import 'brace/mode/html'
import 'brace/mode/html_ruby'
import 'brace/mode/ini'
import 'brace/mode/io'
import 'brace/mode/jack'
import 'brace/mode/jade'
import 'brace/mode/java'
import 'brace/mode/javascript'
import 'brace/mode/jsoniq'
import 'brace/mode/json'
import 'brace/mode/jsp'
import 'brace/mode/jsx'
import 'brace/mode/julia'
import 'brace/mode/kotlin'
import 'brace/mode/latex'
import 'brace/mode/less'
import 'brace/mode/liquid'
import 'brace/mode/lisp'
import 'brace/mode/logiql'
import 'brace/mode/lsl'
import 'brace/mode/lua'
import 'brace/mode/luapage'
import 'brace/mode/lucene'
import 'brace/mode/makefile'
import 'brace/mode/markdown'
import 'brace/mode/mask'
import 'brace/mode/matlab'
import 'brace/mode/maze'
import 'brace/mode/mel'
import 'brace/mode/mushcode'
import 'brace/mode/mysql'
import 'brace/mode/nix'
import 'brace/mode/nsis'
import 'brace/mode/objectivec'
import 'brace/mode/ocaml'
import 'brace/mode/pascal'
import 'brace/mode/perl'
import 'brace/mode/pgsql'
import 'brace/mode/php'
import 'brace/mode/powershell'
import 'brace/mode/praat'
import 'brace/mode/prolog'
import 'brace/mode/properties'
import 'brace/mode/protobuf'
import 'brace/mode/python'
import 'brace/mode/razor'
import 'brace/mode/rdoc'
import 'brace/mode/rhtml'
import 'brace/mode/r'
import 'brace/mode/rst'
import 'brace/mode/ruby'
import 'brace/mode/rust'
import 'brace/mode/sass'
import 'brace/mode/scad'
import 'brace/mode/scala'
import 'brace/mode/scheme'
import 'brace/mode/scss'
import 'brace/mode/sh'
import 'brace/mode/sjs'
import 'brace/mode/smarty'
import 'brace/mode/snippets'
import 'brace/mode/soy_template'
import 'brace/mode/space'
import 'brace/mode/sql'
import 'brace/mode/sqlserver'
import 'brace/mode/stylus'
import 'brace/mode/svg'
import 'brace/mode/swift'
import 'brace/mode/tcl'
import 'brace/mode/tex'
import 'brace/mode/textile'
import 'brace/mode/toml'
import 'brace/mode/tsx'
import 'brace/mode/twig'
import 'brace/mode/typescript'
import 'brace/mode/vala'
import 'brace/mode/vbscript'
import 'brace/mode/velocity'
import 'brace/mode/verilog'
import 'brace/mode/vhdl'
import 'brace/mode/wollok'
import 'brace/mode/xml'
import 'brace/mode/xquery'
import 'brace/mode/yaml'
import 'brace/mode/abap'
import 'brace/mode/abc'
import 'brace/mode/actionscript'
import 'brace/mode/lean'
import 'brace/mode/live_script'
import 'brace/mode/livescript'
import 'brace/mode/mavens_mate_log'
import 'brace/mode/mips_assembler'
import 'brace/mode/mipsassembler'
import 'brace/mode/swig'
import 'brace/mode/diff'
import 'brace/mode/plain_text'
import 'brace/mode/text'
import 'brace/theme/monokai'
import 'brace/theme/textmate'
import 'brace/theme/twilight'
import 'brace/theme/github'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RefreshIcon from '@material-ui/icons/Refresh'
import CheckBox from '../Checkbox/Checkbox'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))
function Editor(props) {
    const [mode, setMode] = useState('javascript')
    const [theme, setTheme] = useState('monokai')
    const [languageCode, setLanguageCode] = useState(63)
    const [output, setOutput] = useState("console.log('Hello world') ")
    const [input, setInput] = useState('')
    const [readOnlyMode, setReadOnlyMode] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [defaultValue, setDefaultValue] = useState(
        'This is the default value'
    )
    const [customInput, setCustomInput] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [showOutput, setShowOutput] = useState({
        status: false,
        data: undefined,
    })
    const onEditorChange = (e) => {
        setOutput(e)
    }
    const onInputTextareaChange = (e) => {
        setInput(e.target.value)
    }
    const languageData = [
        {
            id: 45,
            name: 'assembly_x86',
            defaultValue:
                '.data \n.text\n.global main\nmain:\n	# your code goes here\n	xor	% eax, % eax\nret',
        },
        {
            id: 75,
            name: 'c_cpp',
            defaultValue:
                '#include <stdio.h>\nint main() {\nprintf("Hello World");\nreturn 0;\n}\n',
        },
        {
            id: 86,
            name: 'clojure',
            defaultValue:
                '(ns clojure.examples.hello\n(: gen - class))\n(defn hello - world[username]\n(println(format "Hello, %s" username)))\n(hello - world "world")',
        },
        {
            id: 51,
            name: 'csharp',
            defaultValue:
                'using System;\nclass HelloWorld {\nstatic void Main() {\nConsole.WriteLine("Hello World");\n}\n}',
        },
        {
            id: 77,
            name: 'cobol',
            defaultValue:
                'IDENTIFICATION DIVISION.\nPROGRAM- ID.HELLO - WORLD.\nPROCEDURE DIVISION.\nDISPLAY "Hello, world".\nSTOP RUN.\n',
        },
        {
            id: 62,
            name: 'java',
            defaultValue:
                'public class Main\n{\npublic static void main(String[] args) {\nSystem.out.println("Hello World");\n}\n}',
        },
        { id: 63, name: 'javascript', defaultValue: 'print("Hello World");' },
        { id: 71, name: 'python', defaultValue: 'print("Hello World")' },
        { id: 80, name: 'r', defaultValue: 'print("Hello World")' },
        { id: 72, name: 'ruby', defaultValue: 'puts "Hello World"' },
        {
            id: 81,
            name: 'scala',
            defaultValue:
                'object Hello {\ndef main(args: Array[String]) = {\nprintln("Hello, world")\n}\n}',
        },
        {
            id: 82,
            name: 'sql',
            defaultValue:
                'create table calc(x int, y int);\ninsert into calc values(10, 25);\nselect x, y, (x + y) from calc;',
        },
        { id: 83, name: 'swift', defaultValue: 'print("Hello World")' },
        {
            id: 74,
            name: 'typescript',
            defaultValue:
                'const message:string = "hello world!";\nconsole.log(message);',
        },
    ]

    const submitHandler = async () => {
        let languageCodeMain = 45
        // output - ready
        // input - ready
        // languageCode - unknown
        languageData.map((item, index) => {
            if (mode == item.name) {
                setLanguageCode(languageData[index].id)

                languageCodeMain = languageData[index].id
            }
        })

        setShowOutput({ status: 'Uploading' })

        const response = await fetch(
            'https://judge0-ce.p.rapidapi.com/submissions',
            {
                method: 'POST',
                headers: {
                    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                    'x-rapidapi-key':
                        '0289fd5497msh6e1c7b0ddc2d92bp17e800jsn601d197dbee7', // Get yours for free at https://rapidapi.com/hermanzdosilovic/api/judge0
                    'content-type': 'application/json',
                    accept: 'application/json',
                },
                body: JSON.stringify({
                    source_code: output,
                    stdin: input,
                    language_id: languageCodeMain,
                }),
            }
        )
        setShowOutput({ status: 'Processing' })

        //outputText.innerHTML += 'Submission Created ...\n'
        const jsonResponse = await response.json()
        let jsonGetSolution = {
            status: { description: 'Queue' },
            stderr: null,
            compile_output: null,
        }
        while (
            jsonGetSolution.status.description !== 'Accepted' &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {
            // outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`
            if (jsonResponse.token) {
                let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`

                const getSolution = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
                        'x-rapidapi-key':
                            '0289fd5497msh6e1c7b0ddc2d92bp17e800jsn601d197dbee7', // Get yours for free at https://rapidapi.com/hermanzdosilovic/api/judge0
                        'content-type': 'application/json',
                    },
                })

                jsonGetSolution = await getSolution.json()
            }
        }
        setShowOutput({ status: true })

        if (jsonGetSolution.stdout) {
            const output = atob(jsonGetSolution.stdout)
            //  outputText.innerHTML += `Results : <br />  ${output} <br/> Execution Time : ${jsonGetSolution.time}  Secs <br/>Memory used : ${jsonGetSolution.memory} bytes`
            setShowOutput({ status: true, data: output })
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr)
            // outputText.innerHTML = ''
            // outputText.innerHTML += `\n Error :${error}`
            setShowOutput({ status: true, data: error })
        } else {
            const compilation_error = atob(jsonGetSolution.compile_output)
            setShowOutput({ status: true, data: compilation_error })

            // outputText.innerHTML = ''

            // outputText.innerHTML += `\n Error :${compilation_error}`
        }
    }
    const dropdownChangeHandler = (e) => {
        setMode(e.target.value.toLowerCase())
        languageData.map((item, index) => {
            if (item.name === e.target.value.toLowerCase()) {
                setOutput(item.defaultValue)
            }
        })
    }
    const text = "print('Hello world')"
    let readMode = false
    if (output === text) {
        readMode = true
        setReadOnlyMode(true)
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 8) {
                readMode = true
                setReadOnlyMode(true)
            } else {
                readMode = false
                setReadOnlyMode(false)
            }
        })
    }

    const classes = useStyles()
    const themeChangeHandler = (e) => {
        setTheme(e.target.value.toLowerCase())
    }
    const handleClose = () => {
        // alert("CS")
        setOutput('')
        setAnchorEl(null)
    }
    const readOnlyHandleEnable = () => {
        setReadOnlyMode(true)
        setAnchorEl(null)
    }
    const readOnlyModeDisable = () => {
        setReadOnlyMode(false)
        setAnchorEl(null)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleInputCheckbox = () => {
        setCustomInput(!customInput)
    }
    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
    }
    return (
        <div>
            <Typography variant="h5" align="left">
                Editor
            </Typography>
            <Grid
                item
                container
                xs={12}
                alignItems="center"
                justify="space-between"
                className="editor"
            >
                <Grid
                    item
                    container
                    xs={12}
                    alignItems="center"
                    justify="flex-end"
                    className="editor__head"
                >
                    <Grid item xs={4} container justify="flex-end">
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                            size="small"
                        >
                            <InputLabel id="demo-simple-select-outlined-label">
                                Languages
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={dropdownChangeHandler}
                                value={mode}
                                label="Languages"
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    },
                                    style: { maxHeight: 300 },
                                    getContentAnchorEl: null,
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'assembly_x86'}>
                                    assembly_x86
                                </MenuItem>
                                <MenuItem value={'c_cpp'}>C/C++</MenuItem>
                                <MenuItem value={'clojure'}>Clojure</MenuItem>
                                <MenuItem value={'csharp'}> C#</MenuItem>
                                <MenuItem value={'cobol'}>Cobol</MenuItem>
                                <MenuItem value={'java'}>Java</MenuItem>
                                <MenuItem value={'javascript'}>
                                    Javascript
                                </MenuItem>
                                <MenuItem value={'python'}>Python</MenuItem>
                                <MenuItem value={'r'}>R</MenuItem>
                                <MenuItem value={'ruby'}>Ruby</MenuItem>
                                <MenuItem value={'scala'}>Scala</MenuItem>
                                <MenuItem value={'sql'}>Sql</MenuItem>
                                <MenuItem value={'swift'}>Swift</MenuItem>
                                <MenuItem value={'typescript'}>
                                    Typescript
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                            size="small"
                        >
                            <InputLabel id="demo-simple-select-outlined-label">
                                Theme
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={themeChangeHandler}
                                // value={mode}
                                MenuProps={{
                                    anchorOrigin: {
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    },
                                    style: { maxHeight: 300 },
                                    getContentAnchorEl: null,
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'monokai'}>Dark</MenuItem>
                                <MenuItem value={'textmate'}>Light</MenuItem>
                                <MenuItem value={'twilight'}>
                                    High Contrast
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <IconButton onClick={props.handleFullScreen}>
                        {props.isFullScreen ? (
                            <Tooltip
                                title="Exit Fullscreen"
                                placement="top"
                                arrow
                            >
                                <FullscreenExitIcon />
                            </Tooltip>
                        ) : (
                            <Tooltip
                                title="Enter Fullscreen"
                                placement="top"
                                arrow
                            >
                                <FullscreenIcon />
                            </Tooltip>
                        )}
                    </IconButton>
                    <IconButton
                        size="medium"
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon fontSize="small" />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        style={{ maxHeight: 300 }}
                        getContentAnchorEl={null}
                    >
                        <MenuItem onClick={handleClose}>
                            <RefreshIcon /> Reset code
                        </MenuItem>
                        <MenuItem onClick={readOnlyHandleEnable}>
                            Read Only Mode
                        </MenuItem>
                        <MenuItem onClick={readOnlyModeDisable}>
                            Disable Read Only Mode
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item xs={12}>
                    <AceEditor
                        editorProps={'hello world'}
                        enableBasicAutocompletion
                        onChange={onEditorChange}
                        mode={mode}
                        tabSize={5}
                        value={output}
                        placeholder={'Type here'}
                        theme={theme}
                        readOnly={readOnlyMode}
                        className="wrapper"
                    />
                </Grid>
                <Grid
                    item
                    container
                    justify="flex-end"
                    className="editor__bottom"
                >
                    <Grid item xs={6}>
                        <CheckBox
                            checked={customInput}
                            onClick={handleInputCheckbox}
                        />
                        Test against custom input
                    </Grid>

                    <Grid item xs={6} container justify="flex-end">
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={submitHandler}
                        >
                            Run Code
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitHandler}
                        >
                            Submit Code
                        </Button>
                    </Grid>
                </Grid>
                {customInput && (
                            <TextareaAutosize
                                className="textarea__custom__test__case"
                                onChange={onInputTextareaChange}
                                aria-label="minimum height"
                                rowsMin={3}
                                placeholder="Enter input here"
                            />
                        )}
            </Grid>

            <Grid
                container
                justify="space-between"
                className="console__container"
            >
                {(showOutput.status === 'Uploading' ||
                    showOutput.status === 'Processing') && (
                    <Grid item xs={12} className="editor__status">
                        {showOutput.status + '...'}
                    </Grid>
                )}
                {showOutput.status === true && (
                    <Grid item xs={12}>
                        <Typography variant="h6" align="left">
                            Output
                        </Typography>
                        <div id="output" className="output_text">
                            {showOutput.data}
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

Editor.propTypes = {
    isFullScreen: PropTypes.object,
    handleFullScreen: PropTypes.func,
}
export default Editor