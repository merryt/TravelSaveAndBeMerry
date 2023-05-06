<script lang="ts">
	interface CardData {
		path: string;
		meta: any;
	}

	export let contents: CardData;

	const authorImg = contents.meta?.authors?.includes(',') ? 'Randi' : contents.meta.authors;
	console.log(contents.meta);
</script>

<div class="card">
	<img class="card-img" alt={contents.meta.title} src={contents.meta.coverPhoto} />
	<a href="blog/{contents.path}" class="display card-header-link">
		<h2 class="card-header">{contents.meta.title}</h2>
	</a>
	<p>{contents.meta.description}</p>
	<div class="card-author-profile">
		<img class="profile-img" alt="Author photo" src="{authorImg}.png" />
		{contents.meta.authors}
	</div>
</div>

<!-- <script>
export default {
    props: {
        cardData: {
            type: Object,
            default() {
                return {
                    body: 'Empty body',
                    date: '2020-05-31T22:44:42.261Z',
                    description: 'Here is the description',
                    slug: '2020-05-31-test-post',
                    tags: ['sloths'],
                    thumbnail: '/img/2015-02-21-07.16.15.jpg',
                    title: 'Test post',
                }
            },
        },
    },
    data() {
        return {
            authors: '',
            primaryAuthor: {},
            allAuthors: this.$store.state.authors,
        }
    },
    mounted() {
        this.authors = this.allAuthors.filter(
            (author) =>
                author.slug.toLowerCase() ===
                this.cardData.author[0].toLowerCase(),
        )
        this.primaryAuthor = this.authors[0]
    },
}
</script> -->
