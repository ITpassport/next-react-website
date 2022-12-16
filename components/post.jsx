export default function posts(){
    const props1={ title: "記事のタイトル",url:"post1.html"}
    const props2={ title: "記事のタイトル",url:"post2.html"}

    return (
    <section>
        <h2>おすすめ記事</h2>
        <Eachpost{...props1}/>
        <Eachpost{...props2}/>
    </section>
    )
    }