import { useState } from "react";

type TrendTitle = { title: string; subtitle: string };
type BackupType = Partial<{
    img1: string;
    img2: string;
    img3: string;
    title1: string;
    subtitle1: string;
    title2: string;
    subtitle2: string;
    mainTitle: string;
    mostTrending: string;
    trendTitles: TrendTitle[];
    editIdx: number | null;
}>;

export default function Section2({ canEdit = false }: { canEdit?: boolean }) {
    // State for all editable fields
    const [img1, setImg1] = useState("bn.jpg");
    const [img2, setImg2] = useState("bn.jpg");
    const [img3, setImg3] = useState("bn.jpg ");
    const [title1, setTitle1] = useState("Designing the Heart of Your ");
    const [subtitle1, setSubtitle1] = useState("Home: Bedroom Ideas That Inspire");
    const [title2, setTitle2] = useState("Designing the Heart of Your ");
    const [subtitle2, setSubtitle2] = useState("Home: Bedroom Ideas That Inspire");
    const [mainTitle, setMainTitle] = useState("Designing the Heart of Your \nHome: Bedroom Ideas That Inspire\nYour Mind");
    const [mostTrending, setMostTrending] = useState("Most Trending");
    const [trendTitles, setTrendTitles] = useState<TrendTitle[]>([
        { title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire" },
        { title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire" },
        { title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire" },
        { title: "Designing the Heart of Your ", subtitle: "Home: Bedroom Ideas That Inspire" },
    ]);
    const [editing, setEditing] = useState(false);
    const [editIdx, setEditIdx] = useState<number | null>(null);
    // Handlers for image upload
    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target && typeof ev.target.result === "string") setter(ev.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // Handlers for trend titles
    const handleTrendTitleChange = (idx: number, field: "title" | "subtitle", value: string) => {
        setTrendTitles(titles => titles.map((t, i) => i === idx ? { ...t, [field]: value } : t));
    };
    // Save/cancel for all
    const [backup, setBackup] = useState<BackupType>({});
    const startEdit = (idx: number) => {
        setBackup({
            img1, img2, img3, title1, subtitle1, title2, subtitle2, mainTitle, mostTrending, trendTitles: JSON.parse(JSON.stringify(trendTitles)), editIdx: idx
        });
        setEditing(true);
        setEditIdx(idx);
    };
    const cancelEdit = () => {
        if (backup) {
            if (backup.img1 !== undefined) setImg1(backup.img1);
            if (backup.img2 !== undefined) setImg2(backup.img2);
            if (backup.img3 !== undefined) setImg3(backup.img3);
            if (backup.title1 !== undefined) setTitle1(backup.title1);
            if (backup.subtitle1 !== undefined) setSubtitle1(backup.subtitle1);
            if (backup.title2 !== undefined) setTitle2(backup.title2);
            if (backup.subtitle2 !== undefined) setSubtitle2(backup.subtitle2);
            if (backup.mainTitle !== undefined) setMainTitle(backup.mainTitle);
            if (backup.mostTrending !== undefined) setMostTrending(backup.mostTrending);
            if (backup.trendTitles !== undefined) setTrendTitles(backup.trendTitles);
        }
        setEditing(false);
        setEditIdx(null);
    };
    const saveEdit = () => {
        setEditing(false);
        setEditIdx(null);
    };
    return (
        <div>
            <div className="w-screen h-screen flex">
                <div className="flex ">
                    <div className="w-[400px] h-[300px] mt-16 ml-8">
                        <div className="relative">
                            <img src={img1} alt="image" className="w-[400px] h-[250px] rounded-4xl" />
                            {canEdit && editing && editIdx === 1 && (
                                <>
                                    <input id="up-img1" type="file" accept="image/*" onChange={e => handleImgChange(e, setImg1)} className="hidden" />
                                    <label htmlFor="up-img1" className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-blue-600 text-white px-4 py-2 rounded shadow cursor-pointer">Upload Image</span>
                                    </label>
                                </>
                            )}
                        </div>
                        <div className="flex justify-between mt-4 w-[340px] ml-6">
                            <p>Blog - 18 mins read</p>
                            <p>July 28, 2025</p>
                        </div>
                        {canEdit && editing && editIdx === 1 ? (
                            <>
                                <input value={title1} onChange={e => setTitle1(e.target.value)} className="pt-4 pl-2 text-center pr-3 manrope border" />
                                <input value={subtitle1} onChange={e => setSubtitle1(e.target.value)} className="pl-4 text-center manrope border" />
                            </>
                        ) : (
                            <>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">{title1}</p>
                                <p className="pl-4 text-center manrope">{subtitle1}</p>
                            </>
                        )}
                        <div className="relative">
                            <img src={img2} alt="image" className="w-[400px] h-[250px] rounded-4xl mt-6" />
                            {canEdit && editing && editIdx === 1 && (
                                <>
                                    <input id="up-img2" type="file" accept="image/*" onChange={e => handleImgChange(e, setImg2)} className="hidden" />
                                    <label htmlFor="up-img2" className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-blue-600 text-white px-4 py-2 rounded shadow cursor-pointer">Upload Image</span>
                                    </label>
                                </>
                            )}
                        </div>
                        <div className="flex justify-between mt-4 w-[340px] ml-6">
                            <p>Blog - 18 mins read</p>
                            <p>July 28, 2025</p>
                        </div>
                        {canEdit && editing && editIdx === 1 ? (
                            <>
                                <input value={title2} onChange={e => setTitle2(e.target.value)} className="pt-4 pl-2 text-center pr-3 manrope border" />
                                <input value={subtitle2} onChange={e => setSubtitle2(e.target.value)} className="pl-4 text-center manrope border" />
                            </>
                        ) : (
                            <>
                                <p className="pt-4 pl-2 text-center pr-3 manrope">{title2}</p>
                                <p className="pl-4 text-center manrope">{subtitle2}</p>
                            </>
                        )}
                        {canEdit && !editing ? (
                            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={() => startEdit(1)}>Edit</button>
                        ) : null}
                        {canEdit && editing && editIdx === 1 ? (
                            <>
                                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 mt-2" onClick={saveEdit}>Save</button>
                                <button className="bg-gray-400 text-white px-3 py-1 rounded mt-2" onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : null}
                    </div>
                    <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>
                    <div className="w-[500px] h-[350px] bg-red-400 ml-10 mt-20 rounded-4xl ">
                        <div className="relative">
                            <img src={img3} className="w-[500px] h-[350px] rounded-4xl" />
                            {canEdit && editing && editIdx === 2 && (
                                <>
                                    <input id="up-img3" type="file" accept="image/*" onChange={e => handleImgChange(e, setImg3)} className="hidden" />
                                    <label htmlFor="up-img3" className="absolute inset-0 flex items-center justify-center">
                                        <span className="bg-blue-600 text-white px-4 py-2 rounded shadow cursor-pointer">Upload Image</span>
                                    </label>
                                </>
                            )}
                        </div>
                        <div className="flex justify-between mt-4 w-[340px] ml-20">
                            <p>Blog - 18 mins read</p>
                            <p>July 28, 2025</p>
                        </div>
                        {canEdit && editing && editIdx === 2 ? (
                            <textarea value={mainTitle} onChange={e => setMainTitle(e.target.value)} className="w-[400px] mx-auto pt-10 text-3xl manrope border" />
                        ) : (
                            <div className="w-[400px] mx-auto pt-10 text-3xl manrope">{mainTitle.split("\n").map((line, i) => <div key={i}>{line}</div>)}</div>
                        )}
                        {canEdit && !editing ? (
                            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={() => startEdit(2)}>Edit</button>
                        ) : null}
                        {canEdit && editing && editIdx === 2 ? (
                            <>
                                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 mt-2" onClick={saveEdit}>Save</button>
                                <button className="bg-gray-400 text-white px-3 py-1 rounded mt-2" onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : null}
                    </div>
                    <div className="w-[1px] bg-amber-950 h-[600px] ml-10 mt-26 "></div>
                    <div className="w-[400px] h-[300px] mt-30 ml-8 text-3xl manrope">
                        {canEdit && editing && editIdx === 3 ? (
                            <input value={mostTrending} onChange={e => setMostTrending(e.target.value)} className="mb-2 border" />
                        ) : (
                            mostTrending
                        )}
                        {[0, 1, 2, 3].map(idx => (
                            <div key={idx}>
                                <div className="flex justify-between mt-8 text-[14px] w-[340px] manrope-medium">
                                    <p>Blog - 18 mins read</p>
                                    <p>July 28, 2025</p>
                                </div>
                                <div className="mt-2 pr-20">
                                    {canEdit && editing && editIdx === 3 ? (
                                        <>
                                            <input value={trendTitles[idx].title} onChange={e => handleTrendTitleChange(idx, 'title', e.target.value)} className="pt-4 pr-14 text-center manrope text-[16px] border" />
                                            <input value={trendTitles[idx].subtitle} onChange={e => handleTrendTitleChange(idx, 'subtitle', e.target.value)} className="text-center manrope text-[16px] border" />
                                        </>
                                    ) : (
                                        <>
                                            <p className="pt-4 pr-14 text-center manrope text-[16px]">{trendTitles[idx].title}</p>
                                            <p className="text-center manrope text-[16px]">{trendTitles[idx].subtitle}</p>
                                        </>
                                    )}
                                </div>
                                <div className="w-[350px] h-[1px] bg-amber-900 center mt-4 mb-4 "></div>
                            </div>
                        ))}
                        {canEdit && !editing ? (
                            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={() => startEdit(3)}>Edit</button>
                        ) : null}
                        {canEdit && editing && editIdx === 3 ? (
                            <>
                                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 mt-2" onClick={saveEdit}>Save</button>
                                <button className="bg-gray-400 text-white px-3 py-1 rounded mt-2" onClick={cancelEdit}>Cancel</button>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}