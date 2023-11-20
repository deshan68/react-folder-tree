import { useState } from "react";
import "./App.css";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  FolderIcon,
} from "@heroicons/react/20/solid";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { files } from "./file";

type TEntry = {
  name: string;
  children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ paddingLeft: `${depth * 20}px` }}
      >
        {entry.children ? (
          isExpanded ? (
            <>
              <ChevronDownIcon
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "2px",
                }}
              />
              <FolderIcon
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "3px",
                }}
              />
            </>
          ) : (
            <>
              <ChevronRightIcon
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "2px",
                }}
              />
              <FolderIcon
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "3px",
                }}
              />
            </>
          )
        ) : (
          <DocumentIcon
            style={{
              width: "15px",
              height: "15px",
              marginRight: "5px",
            }}
          />
        )}
        {entry.name}
      </button>
      {isExpanded && (
        <div>
          {entry.children?.map((entry, index) => (
            <Entry key={index} entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="list-container">
      {files.children.map((entry, index) => (
        <Entry key={index} entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
