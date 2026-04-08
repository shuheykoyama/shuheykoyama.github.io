import { visit } from "unist-util-visit";

export function remarkGridDirective() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "containerDirective" && node.name === "grid") {
				node.data = node.data || {};
				node.data.hName = "div";
				node.data.hProperties = { class: "image-grid" };
			}
		});
	};
}
