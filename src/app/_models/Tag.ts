export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'royalblue');
    static readonly KOTLIN = new Tag('Kotlin', 'mediumpurple');
    static readonly CSHARP = new Tag('C#', 'darkgreen');
    static readonly JAVA = new Tag('Java', 'darkgoldenrod');
    static readonly SQL = new Tag('SQL', 'orange');
    static readonly CSS = new Tag('CSS', 'indigo');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
    static readonly HTML = new Tag('HTML', 'orangered');
    static readonly UNITY = new Tag('Unity', 'darkgrey');
    static readonly ASPNET = new Tag('ASP.NET', 'steelblue');
   
    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}