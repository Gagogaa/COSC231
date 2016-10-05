" Basic setup 
":echo ">^.^<"
:set shiftwidth=2
:set number
:set autoindent
:set relativenumber
:set numberwidth=4
:set nowrap
:set tabstop=2
":set colorcolumn=80
let localleader=","
let mapleader ="\<Space>"

" Remove annoying bars
:set guioptions-=m
:set guioptions-=T
:set guioptions-=r
:set guioptions-=L

" Normal mappings
nnoremap <leader>w :w<cr>
nnoremap <leader>q :q<cr>
nnoremap <leader><leader>q :q!<cr>
nnoremap <leader>x :x<cr>
nnoremap <leader>z ZZ<cr>
nnoremap <leader>sv :source $MYVIMRC<cr>
nnoremap <leader>ev :vsplit $MYVIMRC<cr>
nnoremap H 0
nnoremap L $

" Insert mappings
inoremap <c-d> <esc>ddi
"inoremap jk <esc>

" Visual mappings
"surrounds the selection with quotations ""
vnoremap " d<esc>i""<esc>hpl

" Auto commands
:autocmd BufNewFile *.* :write
":autocmd FileType vim nnoremap <buffer> <localleader>c I"<esc>
 
