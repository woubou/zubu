import { useRouter } from "next/router";
import React from "react";
import background from "../images/backgournd.png";

function FilterPropretiesSearch() {
	const router = useRouter();
	return (
		<div className="filter_card">
			<div className="br border-w m_y-20 pd-10">
				<span className="m_x-20">Type</span>
				<span className="m_x-20">Prix</span>
				<span className="m_x-20">Localisation</span>
				<span className="m_x-20">Ville</span>
				<span className="m_x-20">Pièces</span>
			</div>
			<button
				className="btn_p btn color_w br txt_normal m_x-10"
				onClick={() => router.push("/proprety")}>
				Trouver une maison
			</button>
		</div>
	);
}

export default function Main() {
	return (
		<div
			className="main"
			style={{
				backgroundImage: `url(${background.src})`,
			}}>
			<div className="main_desc color_w">
				<h1 className="m_y-20">
					Bienvenue sur Zubu, un site qui met en avant votre bien immobilier
				</h1>
				<div className="m_y-20">
					Recherchez un bien, trouvez-le et fait de ça votre chez vous
				</div>
				<FilterPropretiesSearch />
			</div>
		</div>
	);
}
