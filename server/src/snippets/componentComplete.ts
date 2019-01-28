import { CompletionList, CompletionItemKind, InsertTextFormat, CompletionItem } from 'vscode-languageserver-types';

export function doComponentComplete(): CompletionList {
    const componentnameCompletions: CompletionItem[] = [
        /** Input */
        {
            label: 'Input',
            documentation: `MUI Input Component
<Input model={model} placeholder="..."/>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Input model={\$0} placeholder="\$1"/>`
        },
        {
            label: 'InputNumber',
            documentation: `MUI InputNumber Component
<InputNumber
\tmodValue={modValue}
\tplaceholder="..."
></InputNumber>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<InputNumber
\tmodValue={\$0}
\tplaceholder="\$1"
></InputNumber>`
        },
        {
            label: 'Search',
            documentation: `MUI Search Component
<Search
\tmodValue={modValue}
></Search>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Search
\tmodValue={modValue}
></Search>`
        },
        {
            label: 'Textarea',
            documentation: `MUI Textarea Component
<Textarea
\tmodel={model}
\tplaceholder="...">
</Textarea>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Textarea
\tmodel={\$0}
\tplaceholder="\$1">
></Textarea>`
        },
        {
            label: 'InputTag',
            documentation: `MUI InputTag Component
<InputTag model={model} />`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<InputTag model={\${0}} />`
        },
        /** Form */
        {
            label: 'Form',
            documentation: `MUI Form Component
<Form
\tlayout={layout}
>
\t<FormItem></FormItem>
\t<FormItem></FormItem>
</Form>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Form
\tlayout={layout}
>
\t\$1
</Form>`
        },
        {
            label: 'FormItem',
            documentation: `MUI FormItem Component
<FormItem
\tname={name} label={label}
required emptyMessage="..."
>
</FormItem>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<FormItem
\tname={\$1} label={\$2}
\trequired emptyMessage="\$3"
>
\t\$4
</FormItem>`
        },
        /** Checkbox */
        {
            label: 'Checkbox',
            documentation: `MUI Checkbox Component
<Checkbox
\tmodel={model}
>
</Checkbox>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Checkbox
\tmodel={\$1}
>
\t\$2
</Checkbox>`
        },
        {
            label: 'CheckboxGroup',
            documentation: `MUI CheckboxGroup Component
<CheckboxGroup
\toptions={options}
\tdefaultValue={[default]}
>
</CheckboxGroup>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<CheckboxGroup
\toptions={\$1}
\tdefaultValue={\$2}
            >
\t\$3
</CheckboxGroup>`
        },
        {
            label: 'CheckboxAll',
            documentation: `MUI CheckboxAll Component
<CheckboxAll
\toptions={options}
\tdefaultValue={[default]}
>
</CheckboxAll>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<CheckboxAll
\toptions={\$1}
\tdefaultValue={\$2}
>
\t\$3
</CheckboxAll>`
        },
        /** Switch */
        {
            label: 'Switch',
            documentation: `MUI Switch Component
<Switch model={model}>
</Switch>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Switch model={model}>
\t\$0
</Switch>`
        },
        /** Select */
        {
            label: 'Select',
            documentation: `MUI Select Component
<Select
\tmodel={model}
\tdefaultValue={defaultValue}
>
</Select>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Select
\tmodel={model}
\tdefaultValue={defaultValue}
>
\t\${0}
</Select>`
        },
        {
            label: 'Option',
            documentation: `MUI Select-Option Component
<Option value={value}>
</Option>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Option value={\$1}>
\t\$0
</Option>`
        },
        {
            label: 'SearchInput',
            documentation: `MUI SearchInput Component
<SearchInput
\tmodel={model}
\tplaceholder="..."
>
</SearchInput>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<SearchInput
\tmodel={\$1}
\tplaceholder="\$2"
>
\t\$0
</SearchInput>`
        },
        /** Radio */
        {
            label: 'Radio',
            documentation: `MUI Radio Component
<Radio model={model} checked>
</Radio>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Radio model={\$1} checked>
\t\$0
</Radio>`
        },
        {
            label: 'RadioGroup',
            documentation: `MUI RadioGroup Component
<RadioGroup>
</RadioGroup>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<RadioGroup>
\t\${0}
</RadioGroup>`
        },
        /** DatePicker */
        {
            label: 'DatePicker',
            documentation: `MUI DatePicker Component
<DatePicker
\tcurrentDate={currentDate}
>
</DatePicker>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<DatePicker
\tcurrentDate={\$1}
>
</DatePicker>`
        },
        {
            label: 'DateTimePicker',
            documentation: `MUI DateTimePicker Component
<DateTimePicker
\tmodValue={modValue}
>
</DateTimePicker>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<DateTimePicker
\tmodValue={\$1}
>
</DateTimePicker>`
        },
        {
            label: 'MonthPicker',
            documentation: `MUI MonthPicker Component
<MonthPicker
\tcurrentDate={currentDate}
>
</MonthPicker>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<MonthPicker
\tcurrentDate={\$1}
>
\t\${0}
</MonthPicker>`
        },
        /** TimePicker */
        {
            label: 'TimePicker',
            documentation: `MUI TimePicker Component
<TimePicker
\tcurrentTimeStr={currentTimeStr}
>
</TimePicker>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<TimePicker
\tcurrentTimeStr={currentTimeStr}
>
\t\${0}
</TimePicker>`
        },
        /** Cascader */
        {
            label: 'Cascader',
            documentation: `MUI Cascader Component
<Cascader
\toptions={options}
\tmodValue={modValue}
\tdefaultValue={defaultValue}
\tplaceholder="..."
>
</Cascader>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Cascader
\toptions={\$1}
\tmodValue={\$2}
\tdefaultValue={\$3}
\tplaceholder="\$4"
>
</Cascader>`
        },
        /** Table */
        {
            label: 'Table',
            documentation: `MUI Table Component
<Table
\tcolumns={columns}
\tdataSource={dataSource}
\tpageTotal={pageTotal}
nowrap
bordered
>
</Table>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<Table
\tcolumns={\$1}
\tdataSource={\$2}
\tpageTotal={\$3}
nowrap
bordered
>
</Table>`
        },
        {
            label: 'TableWrap',
            documentation: `MUI TableWrap Component
<TableWrap>
\t<TableHead>
\t\t<tr>
\t\t\t<th>表头1</th>
\t\t\t<th>表头2</th>
\t\t</tr>
\t</TableHead>
\t<TableBody>
\t\t<tr>
\t\t\t<td>内容1</td>
\t\t\t<td>内容2</td>
\t\t</tr>
\t</TableBody>
</TableWrap>`,
            kind: CompletionItemKind.Variable,
            insertTextFormat: InsertTextFormat.Snippet,
            insertText: `<TableWrap>
\t<TableHead>
\t\t<tr>
\t\t\t<th>\${1:表头1}</th>
\t\t\t<th>\${2:表头2}</th>
\t\t</tr>
\t</TableHead>
\t<TableBody>
\t\t<tr>
\t\t\t<td>\${3:内容1}</td>
\t\t\t<td>\${4:内容2}</td>
\t\t</tr>
\t</TableBody>
</TableWrap>`
        },
    ];

    return {
        isIncomplete: false,
        items: componentnameCompletions
    };
}