class HtmlHandler {
  public TextChangeHandler(id: string, output: string): void {
    let markdown = <HTMLTextAreaElement>document.getElementById(id)
    let markdownOutput = <HTMLLabelElement>document.getElementById(output)

    if (markdown !== null) {
      markdown.onkeyup = (e) => {
        if (markdown.value) {
          markdownOutput.innerHTML = markdown.value
        } else {
          markdownOutput.innerHTML = '<p></p>'
        }
      }
    }
  }
}

// Lista de tags enumeradas que será utilizada pelo Mapeador
enum TagType {
  Paragraph,
  Header1,
  Header2,
  Header3,
  HorizontalRule
}

// Mapeador que traduz as tags enumeradas em tags HTML
class TagTypeHtml {
  private readonly tagType: Map<TagType, string> = new Map<TagType, string>()
  constructor() {
    this.tagType.set(TagType.Header1, 'h1')
    this.tagType.set(TagType.Header2, 'h2')
    this.tagType.set(TagType.Header3, 'h3')
    this.tagType.set(TagType.Paragraph, 'p')
    this.tagType.set(TagType.HorizontalRule, 'hr')
  }

  // Recupera a tag de abertura
  // Se a linha não iniciar com uma marcação é tratada com um parágrafo
  public OpeningTag(tagType: TagType): string {
    return this.GetTag(tagType, '<')
  }

  // Recupera a tag de fechamento
  public ClosingTag(tagType: TagType): string {
    return this.GetTag(tagType, '</')
  }

  private GetTag(tagType: TagType, openingTagPattern: string): string {
    let tag = this.tagType.get(tagType)
    if (tag !== null) {
      return `${openingTagPattern}${tag}>`
    }
    return `${openingTagPattern}p>`
  }
}
