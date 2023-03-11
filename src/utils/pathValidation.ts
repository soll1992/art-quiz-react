import { TDataArr } from '../types';

export default function pathValidation(data: TDataArr | null, path: string | undefined, dataOnLoad: boolean, mode: 'category' | 'quiz') {
  if (path && data?.length !== 0 && !dataOnLoad && mode === 'quiz') {
    const wrongPath = ![...new Set(data?.map((item) => item.quiz))].includes(path);
    return wrongPath;
  }
  if (path && data?.length === 0 && !dataOnLoad && mode === 'category') {
    return true;
  }
  return false;
}
