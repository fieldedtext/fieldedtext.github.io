---
layout: ../../layouts/MarkdownPageLayout.astro
title: 'Capabilities'
---
The following lists describes the capabilities of the fielded text standard to handle structures and formats which are used in text files.

* **Fields separated by a delimiter character**\
CSV files have fields separated by delimiters - normally the comma character. Delimited fields are supported and the delimiter character can be specified.

* **Fixed Length Fields**\
Some text files store values using fixed length fields. Since the length of each field is predetermined, these files do not use delimiters to specify when each field ends. Fielded Text supports fixed length fields and lets you specify the width, truncation and padding on a field by field basis.

* **Mixed Fixed Length and Delimiter separated fields in a line**\
Fielded Text even supports files which use both Delimited fields and Fixed Length fields in the same line.

* **Quoted Fields (Optional or Explicit)**\
Often text files surround field values with a quote character - normally the double quote character (") is used. This allows the field values to include the delimiter character or End Of Line character which normally could not be embedded inside a field value. It also makes it clear which white space characters are part of the field value.\
Fielded Text allows you to specify whether or fields are quoted on a field by field basis. It even allows you to specify that a field is optionally quoted in which case it will determine whether an individual value is quoted and handle it accordingly. You can also specify which character is used as the quoted character however this applies to all fields.

* **New Lines in Quotes**\
Sometimes field values contain New Line characters (eg Line Feed character). This can occur for example, if a field value contains paragraphs of text. Fielded Text lets you specify whether field values are allowed to contain New Line characters.

* **Automatic New Line detection or specified New Line character**\
There are different conventions for ending a line in a text file. Fielded Text automatically detects what type of convention is being used to end a line. Alternatively, you can explicitly specify which character specifies the end of a line.

* **Termination of last line in file**\
Some systems expect the last line of a text file to not include the End of Line character(s). FieldedText can specify how the last line should be terminated.

* **Comments**\
Some text files include comment lines. These lines should be ignored when parsing as they do not contain values. Fielded Text lets you specify a line comment character. Lines beginning with this character are treated as comments.

* **Ignoring Blank Lines**\
Sometimes text files contain blank lines which should be ignored. Fielded Text lets you specify if blank lines are to be ignored.

* **Ignoring extra characters/fields in lines**\
Fielded Text can specify that a line is to be parsed until the required values have been extracted for all fields expected in the a line. Any extra characters after that in the line, are ignored. This allows new fields to be added to a text file without "breaking" existing software which parses that text file.\
Alternatively, Fielded Text can specify that there should not be any extra characters after the last field in a line.

* **Incomplete records**\
In some circumstances, a line may not include all the fields specified in a record. For example, a record may have repeating fields at the end up to a maximum amount. FieldedText can specify that a line does not have to include all its fields.

* **Handling language cultures**\
Different languages have different conventions in how to display numbers and how to compare text. For example, in English, a period (.) is used to designate a decimal point whereas in German, a comma (,) is used.\
Fielded Text lets you specify the culture to be used when parsing or generating text files. The conventions appropriate for that language will then be used.

* **Multiple Heading Lines (both delimited and fixed length)**\
Text Files sometimes include heading lines which provide headings for each of the fields. Fielded Text supports both parsing and generating heading lines.

* **Substitutions (escape sequences)**\
Substitutions allow strings or characters to represented in a file with tokens. They are similar to Escape Sequences in the 'C' language; a substitution character (escape) character identifies a substitution and the next character (the token) specifies what string should be substituted. These are very useful for including non-printable characters in field values.\
Fielded Text supports several types of substitutions - including: String, New Line and XML substitutions. It also allows you to specify the character to be used as the substitution character.

* **Embedded (Stuffed) Quote Characters**\
Some quoted field values also contain the quote character. One way of embedding the quote character is to include 2 successive quote characters to represent one quote character (stuffed quote character). Fielded Text supports stuffed embedding of quote characters.

* **Boolean, DateTime, Decimal, Float, Integer and String fields**\
Fields can hold values with different data types. Fielded Text supports the following data types:

    * Boolean
    * DateTime
    * Decimal (for working with currencies)
    * Float (up to Double range and precision)
    * Integer (up to 64 bits)
    * String

* **Null fields**\
Sometimes a field value is undefined. Fielded Text supports several methods for detecting and specifying Null field values.

* **Constant fields**\
In some files, a field always has to have the same value. Fielded Text supports declaring fields as constants and allows the constant to be specified. If a field is declared as a constant, then all values for that field must match the constant specified.

* **Specify format and styles of fields**\
Booleans, datetimes, and numbers can be formatted in many different ways in a text file. Fielded Text lets you specify the formatting and style of these data types, on a field by field basis.

* **Field Heading Constraints**\
Fielded Text supports constraints on field headings. These include:

    * Check that the heading for each field is as expected.
    * Use the heading as the name of a field.

* **Lines can have different sequences of fields based on the value of “key” fields**\
Some files have can have lines with different sets of fields. Typically, one of the fields is used as a key. The value a key field contains, determines the sequence of fields for the rest of the line. Fielded Text supports these types of files with its 'Sequences' capability.