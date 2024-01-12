import React, { useState, useEffect } from "react";
import "./style.css";
const SelectCatagory = ({
	generes,
	resultShowBygenere,
	params,
	cancelOption,
}) => {
	const [isShow, setIsShow] = useState(false);
	const [option, setOption] = useState(generes);
	const [query, setQuery] = useState();
	const [selectOption, setSelectOption] = useState();

	const toggleShowingGenereOption = (e) => {
		e.stopPropagation();
		setOption(generes);
		setQuery("");
		setIsShow((prev) => !prev);
	};
	useEffect(() => {
		handelChange();
	}, [query]);
	const handelChange = () => {
		// console.log(qurey)
		if (isShow) {
			const newgeneres = generes.filter((genere) =>
				genere.name.search(new RegExp(query, "i")) != -1 ? true : false,
			);
			setOption(newgeneres);
		}
	};

	useEffect(() => {
		if (params) {
			const selectOption = params?.split(",");
			const newSelectOption = generes?.filter((genere) => {
				return selectOption.some((opt) => genere.id.toString() === opt);
			});

			setSelectOption(newSelectOption);
		} else {
			setSelectOption(null);
		}
	}, [params]);

	return (
		<div className="catagory__main" onClick={(e) => cancelOption(e)}>
		<div className="showing__select__options">
			{selectOption?.map((opt) => (

				<div className="showing__select__option" key={opt.id}>
					<span>{opt.name}</span>
					<i class="fa-solid fa-xmark poiter__cersur" id={opt.id}></i>
				</div>
				
			))}
		</div>

			<div className="catagory__seletion">
				<div className="catagory__seletion__header">
					<input
						type="text"
						value={query}
						placeholder="Select Catagory"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<i
						class="fa-solid fa-angle-down poiter__cersur"
						onClick={toggleShowingGenereOption}
					></i>
				</div>
				{isShow && (
					<div
						className="showing__generes"
						onClick={(e) => resultShowBygenere(e)}
					>
						{option?.map((genere) => (
							<div
								className="showing__genere poiter__cersur"
								key={genere.id}
								id={genere.id}
							>
								{genere.name}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default SelectCatagory;
